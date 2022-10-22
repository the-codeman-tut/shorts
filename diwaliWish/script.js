let i = 10;
let interval = setInterval(() => {
    let countdown = document.getElementById('countdown');

    let counter = i;
    if (/^\d$/.test(i)) counter = `0${i}`

    countdown.innerHTML = counter;

    if (i === 0) {
        clearInterval(interval);
        let main = document.getElementById('main');
        let container = document.getElementById("counter");
        let wishes = document.getElementById("wishes");

        // main.setAttribute("class", "diwalBackground");
        container.setAttribute("class", "hideView");
        wishes.setAttribute("class", "wishContainer diwalBackground");
    }
    i--;
}, 1000)