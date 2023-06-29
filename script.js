const TIMEOUT = 5000;

const display = document.querySelector("#display");
const button = document.querySelector("#button");
const counter = document.querySelector("#counter");

button.onclick = start;

function start() {
    let clicks = 1;
    counter.textContent = 0;

    const startTime = Date.now();

    button.textContent = "Click";
    let form = document.createElement("form");
    form.id = "form";

    display.textContent = formatTime(TIMEOUT);

    button.onclick = () => (counter.textContent = clicks++);

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = "Game Over";

        clearInterval(interval);
        clearTimeout(timeout);
        button.textContent = "Again";
        setTimeout(() => {
            button.onclick = start;
        }, 800);
    }, TIMEOUT);
}

const formatTime = (ms) => {
    return (ms / 1000).toFixed(2);
};
