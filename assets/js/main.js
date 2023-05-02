var span = document.getElementById('time');
function time() {
    var d = new Date();
    var seconds = d.getSeconds();
    var minuts = d.getMinutes();
    var hours = d.getHours();
    var days = d.getDay();
    var months = d.getMonth();
    var year = d.getFullYear();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (minuts < 10) {
        minuts = `0${minuts}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (days < 10) {
        days = `0${days}`
    }
    if (months < 10) {
        months = `0${months}`
    }
    span.innerHTML = `${hours}:${minuts}:${seconds} (GMT+5) | ${days}.${months}.${year}`
}
setInterval(time, 1000);