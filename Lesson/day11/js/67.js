document.getElementById('lnkAbout').addEventListener('click', (e) => {
    e.preventDefault(); //default davranisi engelle demek. href te ki adrese gitmiyor

    //document.querySelector("main .about").style.backgroundColor="green"

    //console.log(e.target.closest("p"));//null cikar cunku  a taginin parent i degil
    e.target.closest('main').querySelector('.about').style.backgroundColor =
        'green';

    const link = e.target.getAttribute('href');
    location.href = link;
});
