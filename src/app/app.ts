import './app.css';
import {createLogo} from "../logo/logo.ts";

const title = "智存系统";
const description = "一个管理您的多网盘文件的软件";

export function createApp(): HTMLDivElement {
    const app = document.createElement("div");
    app.id = "app";
    app.appendChild(createLogo());
    app.innerHTML += `
<div id="main-content">
    <h1 id="main-title">${title}</h1>
    <p id="main-description">${description}</p>
    <p id="main-download">
        <button id="download" type="button" onclick="document.querySelector('#download').innerHTML='🚧 敬请期待 🚧'">下载客户端</button>
    </p>
</div>
    `;
    return app;
}
