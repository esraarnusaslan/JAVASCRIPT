const data = [
    {
        name: 'Aslı Yurt',
        age: 29,
        city: '',
        img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        profession: 'product owner',
    },
    {
        name: 'Demir Kurt',
        age: 31,
        img: '../demir-kurt.jpg',
        profession: 'Automation Engineer',
    },
    {
        name: 'Can Kara',
        age: 25,
        img: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        profession: 'Intern',
    },
    {
        name: 'Sara Duru',
        age: 27,
        img: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        profession: 'Web Developer',
    },
    {
        name: 'Suat Gök',
        age: 32,
        img: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        profession: 'Web Designer',
    },
];

const title = document.querySelector('#title');
const age = document.querySelector('#age');
const profession = document.querySelector('#profession');
const image = document.querySelector('#image');
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const button = document.querySelector('#btn');
const sub = document.querySelector('.sub');

let mode = true;

btn.addEventListener('click', () => {
    if (mode) {
        sub.style.display = 'inline-block';
        btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        sub.style.display = 'none';
        btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
    mode = !mode;
});

const bringThePeople = (index) => {
    let bring = data[index];
    title.innerText = bring.name;
    age.innerText = bring.age;
    image.src = bring.img;
    profession.innerText = bring.profession;
};

let objectIndex = 0;
next.addEventListener('click', () => {
    if (objectIndex > data.length - 1) {
        objectIndex = 0;
    }
    bringThePeople(objectIndex);
    objectIndex++;
});

back.addEventListener('click', () => {
    objectIndex--;
    if (objectIndex < 0) {
        objectIndex = data.length - 1;
    }
    bringThePeople(objectIndex);
});
