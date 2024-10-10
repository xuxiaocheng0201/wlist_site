import './background.css'

function do_move(circle: HTMLDivElement) {
    circle.classList.add('backgroundCircle');

    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.scale = `${Math.random() * 100}%`;
    circle.style.transform = `translate(-50%, -50%)`;

    circle.style.setProperty('--move-x', `${(Math.random() * 2 - 1) * 100}vw`);
    circle.style.setProperty('--move-y', `${(Math.random() * 2 - 1) * 100}vh`);

    const start = Math.random() * 5000;
    const end = 2000 + Math.random() * 3000;

    setTimeout(() => {
        circle.classList.add('fadeIn');
        circle.classList.add('moving');
    }, start);

    setTimeout(() => {
        circle.classList.add('fadeOut');
    }, start + end);

    setTimeout(() => {
        circle.classList.remove("moving");
        circle.classList.remove("fadeIn");
        circle.classList.remove("fadeOut");

        do_move(circle);
    }, start + end + 5000);
}

export function createBackground(): HTMLDivElement {
    const background = document.createElement('div');
    background.id = "background";
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        do_move(circle);
        background.appendChild(circle);
    }
    return background;
}
