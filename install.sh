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


# Állítsuk be a fish-t alapértelmezett shell-nek
if ! grep -q "/bin/fish" /etc/shells; then
    echo "/bin/fish" | sudo tee -a /etc/shells
fi

chsh -s /bin/fish
echo "==> Fish beállítva alap shell-nek"



# Configok és home mappa másolása
echo "==> Configok felmásolása"
cp -r ./home/. "$HOME/"

# Alapértelmezett mappák létrehozása
mkdir -p "$HOME/Desktop" "$HOME/Downloads" "$HOME/Documents" "$HOME/Projects" "$HOME/Pictures" "$HOME/Videos" "$HOME/Music"

echo "==> Home mappa és configok készen"
