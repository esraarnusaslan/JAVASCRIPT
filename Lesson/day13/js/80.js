let interval = null;

//start
document.getElementById('btnStart').addEventListener('click', () => {
    if (interval) return;
    interval = setInterval(() => {
        const price = Math.floor(Math.random() * 4000 + 1000);
        document.getElementById('lstPrices').innerHTML += ` <li>${price}</li>`;
    }, 2000);
});

//stop
document.getElementById('btnStop').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});
