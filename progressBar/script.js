let fill = document.getElementById('fill');
let progressValue = document.getElementById('value');
let i = 1;

let interval = setInterval(() => {
    let percentage = `${i}%`
    fill.style.width = percentage;
    progressValue.innerText = percentage;

    if (i === 100) clearInterval(interval);

    i++;
},50)