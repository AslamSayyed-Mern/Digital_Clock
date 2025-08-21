let timer = document.getElementById("clock");

function updateClock() {
    let time = new Date().toLocaleTimeString();
    timer.innerText = time;
}

updateClock(); 
setInterval(updateClock, 1000);
