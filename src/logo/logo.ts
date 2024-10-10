import logoSvg from './logo.svg';

export function createLogo(): HTMLImageElement {
    const logo = document.createElement("img");
    logo.id = "logo";
    logo.src = logoSvg;
    logo.alt = "wlist";
    return logo;
}
