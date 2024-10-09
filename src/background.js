document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerText = `
        .backgroundCircle {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: rgba(255, 165, 0, 0.07);
            filter: blur(10px);
            pointer-events: none;
            will-change: transform, opacity;
            overflow: hidden;
            opacity: 0;
        }
        .backgroundCircle.fadeIn {
            opacity: 1;
            transition: opacity 5s ease-in-out;
        }
        .backgroundCircle.fadeOut {
            opacity: 0;
            transition: opacity 5s ease-in-out;
        }
        @keyframes moveBackgroundCircle {
            0% {
                transform: translate(-50%, -50%) translate(0, 0);
            }
            100% {
                transform: translate(-50%, -50%) translate(var(--move-x, 0), var(--move-y, 0));
            }
        }
        .backgroundCircle.moving {
            animation: moveBackgroundCircle 10s linear infinite;
        }
    `;
    document.querySelector("head").appendChild(style);

    function do_move(circle) {
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

    const container = document.querySelector('#background');
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        do_move(circle);
        container.appendChild(circle);
    }
});
