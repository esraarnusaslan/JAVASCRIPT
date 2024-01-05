const btnSearch = document.querySelector('#btnSearch');
const txtTCK = document.querySelector('#txtTCK');

txtTCK.addEventListener('input', (e) => {
    const tck = e.target.value;
    if (tck.length <= 11) {
        if (tck.length === 11) {
            btnSearch.removeAttribute('disabled');
        } else {
            btnSearch.setAttribute('disabled', 'disabled');
        }
    } else {
        e.target.value = tck.slice(0, 11);
    }
});
