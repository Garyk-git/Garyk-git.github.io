let h = document.querySelector('.hour'),
    m = document.querySelector('.min'),
    s = document.querySelector('.sec');


setInterval(clock, 1000);

function clock() {
    let d = new Date();
    let hh = (d.getHours() * 30) + (d.getMinutes() / 2);
    let mm = d.getMinutes() * 6;
    let ss = d.getSeconds() * 6;
    console.log(hh, mm, ss);
    h.style.transform = `rotate(${hh}deg)`;
    m.style.transform = `rotate(${mm}deg)`;
    s.style.transform = `rotate(${ss}deg)`;
}


let time = document.querySelector('.time');

function watch() {
    let d = new Date();
    let hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    let sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    time.innerHTML = `${hours}:${min}:${sec}`;
}

setInterval(watch, 1000);







