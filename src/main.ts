import './style.css';
import {createBackground} from "./background/background.ts";
import {createFooter} from "./footer/footer.ts";

const app = document.getElementById("app")!;

app.innerHTML = `<a id="wip">🚧 敬请期待 🚧</a>`;

const background = document.createElement("div");
createBackground(background);
app.appendChild(background);

const footer = document.createElement("div");
createFooter(footer);
app.appendChild(footer);
