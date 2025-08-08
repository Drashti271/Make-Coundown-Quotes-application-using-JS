let progressBar = document.getElementById('progress-bar');
let download = document.getElementById('download');
let stop = document.getElementById('stop');
let interval = null;
let buffer = 0;

download.addEventListener("click",() => {

    interval = setInterval(() => {
        buffer += 5;
        if (buffer > 100) buffer = 100;
        progressBar.style.width = buffer + '%';
        progressBar.textContent = buffer + '%';
        progressBar.style.transition = 'all';
        progressBar.style.transitionDuration = '0.2s';
        progressBar.style.transitionTimingFunction = 'linear';
        progressBar.style.transitionProperty = 'width';
        if(buffer >= 100) {
            clearInterval(interval);
        }
    }, 1000);
})

stop.addEventListener("click",() => {
    clearInterval(interval);
    download.innerText = 'Resume';
    download.classList.remove("btn-success");
    download.classList.add("btn-danger");
})