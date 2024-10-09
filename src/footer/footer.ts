import './footer.css';

export function createFooter(footer: Element) {
    footer.id = "footer";
    footer.innerHTML += `<span>当前版本：0.1.0</span>`;
    footer.innerHTML += `<a href="https://beian.miit.gov.cn" target="_blank">浙ICP备 2024126116号</a>`;
}
