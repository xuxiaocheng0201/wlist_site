import './style.css';
import {createBackground} from "./background.ts";

document.querySelector("#app")!.innerHTML = `
    <div id="background"></div>
    <a id="wip">🚧 敬请期待 🚧</a>
    <div id="footer">
        <span>当前版本：0.0.1</span>
        <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备 2024126116号</a>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    createBackground(document.getElementById('background')!);
});
