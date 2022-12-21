function updateTime() {
    let dateTime = new Date();

    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    let day = dateTime.getDay();
    let month = dateTime.getMonth();

    let dd = String(dateTime.getDate()).padStart(2, '0');

    // let session = document.getElementById('session');
    let hrs = document.getElementById('hr');
    let min = document.getElementById('min');
    let dayelement = document.getElementById('day');
    let monthElement = document.getElementById('month');
    let todayDate = document.getElementById('dd');

    let sess = 'AM';

    if (hours >= 12) sess = 'PM';

    // session.innerHTML = sess;

    if (hours > 12) hours = hours - 12;
    if (hours === 0) hours = 12;

    if (/^\d$/.test(hours)) hours = `0${hours}`
    if (/^\d$/.test(minutes)) minutes = `0${minutes}`
    if (/^\d$/.test(seconds)) seconds = `0${seconds}`

    hrs.innerHTML = hours;
    // sec.innerHTML = seconds;
    min.innerHTML = minutes;

    dayelement.innerHTML = days[day];
    monthElement.innerHTML = monthNames[month];
    todayDate.innerHTML = dd;
}

setInterval(updateTime, 10);