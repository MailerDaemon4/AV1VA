#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail
IFS=$'\n'

FILE_PATH="${1:-}"
PV_WIDTH="${2:-80}"
PV_HEIGHT="${3:-24}"
IMAGE_CACHE_PATH="${4:-/tmp/ranger_image_cache}"
PV_IMAGE_ENABLED="${5:-False}"

FILE_EXTENSION="${FILE_PATH##*.}"
FILE_EXTENSION_LOWER="$(printf "%s" "${FILE_EXTENSION}" | tr '[:upper:]' '[:lower:]')"

HIGHLIGHT_SIZE_MAX=262143  # 256KiB
HIGHLIGHT_TABWIDTH=${HIGHLIGHT_TABWIDTH:-8}
HIGHLIGHT_STYLE=${HIGHLIGHT_STYLE:-pablo}
HIGHLIGHT_OPTIONS="--replace-tabs=${HIGHLIGHT_TABWIDTH} --style=${HIGHLIGHT_STYLE} ${HIGHLIGHT_OPTIONS:-}"

# =====================
# Kiterjesztés alapján
# =====================
handle_extension() {
    case "${FILE_EXTENSION_LOWER}" in
        zip|tar|gz|bz2|xz|7z|rar)
            bsdtar -tf "${FILE_PATH}" && exit 5
            ;;
        pdf)
            pdftotext -l 10 -nopgbrk -q "${FILE_PATH}" - | fmt -w "${PV_WIDTH}" && exit 5
            exiftool "${FILE_PATH}" && exit 5
            ;;
    esac
}

# =====================
# MIME típus alapján
# =====================
handle_mime() {
    local mimetype="$1"

    case "$mimetype" in
        text/*|*/xml)
            if [[ $(stat -c%s "$FILE_PATH") -gt "$HIGHLIGHT_SIZE_MAX" ]]; then
                exit 2
            fi
            if command -v bat >/dev/null 2>&1; then
                bat --color=always --style=plain "$FILE_PATH" && exit 5
            elif command -v highlight >/dev/null 2>&1; then
                highlight --out-format=ansi --force "$FILE_PATH" && exit 5
            else
                cat "$FILE_PATH" && exit 2
            fi
            ;;
        image/*)
            # Csak image info ExifTool-lal, ne próbáljon renderelni
            if command -v exiftool >/dev/null 2>&1; then
                exiftool "$FILE_PATH"
                exit 0
            else
                echo "ExifTool nincs telepítve."
                exit 1
            fi
            ;;
        video/*|audio/*)
            mediainfo "$FILE_PATH" && exit 5
            exiftool "$FILE_PATH" && exit 5
            ;;
    esac
}

# =====================
# Fallback
# =====================
handle_fallback() {
    echo "----- File Type Classification -----"
    file --dereference --brief -- "$FILE_PATH"
    exit 5
}

# =====================
# Main
# =====================
if [[ -z "$FILE_PATH" ]]; then
    echo "Usage: $0 <file> [width] [height] [image_cache] [image_enabled]"
    exit 1
fi

MIMETYPE=$(file --dereference --brief --mime-type -- "$FILE_PATH")

handle_extension
handle_mime "$MIMETYPE"
handle_fallback
