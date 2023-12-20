function ustAl() {
    const taban = document.querySelector('#taban');
    tabanAl = taban.value;

    const us = document.querySelector('#us');
    usAl = us.value;

    const sonuc = Number(tabanAl ** usAl);

    const sonucMsg = document.querySelector('.sonuc');

    sonucMsg.classList.add('bigger-input');

    sonucMsg.innerHTML = `<b> ${tabanAl}<sup>${usAl}</sup>=${sonuc}</b>`;
}
