#!/usr/bin/env bash
set -euo pipefail

# Full lista helye (repo + AUR)
FULL_LIST="./fullpkglist.txt"

# Ellenőrizzük, hogy yay telepítve van-e, ha nincs, telepítjük
if ! command -v yay &> /dev/null; then
    echo "==> Yay nincs telepítve, telepítés..."
    sudo pacman -S --needed --noconfirm git base-devel
    git clone https://aur.archlinux.org/yay.git /tmp/yay
    pushd /tmp/yay
    makepkg -si --noconfirm
    popd
fi

# Soronként telepítjük a csomagokat
while read -r pkg; do
    # Üres sorok és kommentek kihagyása
    [[ -z "$pkg" ]] && continue
    [[ "$pkg" == \#* ]] && continue

    # Repo-ban van?
    if pacman -Si "$pkg" &>/dev/null; then
        echo "==> Telepítés pacman-nal: $pkg"
        sudo pacman -S --needed --noconfirm "$pkg"
    else
        echo "==> Telepítés AUR-ból (yay): $pkg"
        yay -S --needed --noconfirm "$pkg"
    fi
done < "$FULL_LIST"

echo "==> Csomagok telepítve."

