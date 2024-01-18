const hourEl = document.querySelector('#clock li:first-child');
const secondEl = document.querySelector('#clock li:nth-child(2)');
const minuteEl = document.querySelector('#clock li:last-child');

const setClock = () => {
    const dateTime = new Date();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    hourEl.innerHTML = hour.toString().length === 1 ? `0${hour}` : hour;
    minuteEl.innerHTML = minute.toString().length === 1 ? `0${minute}` : minute;

    secondEl.classList.toggle('hidden');
};

setInterval(setClock, 1000);
