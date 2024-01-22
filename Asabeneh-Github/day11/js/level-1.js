const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    },
];

//! E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp
//! sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.

const [E, pi, yerCekimi, humanBodyTemp, waterBoilingTemp] = constants;
console.log(E, pi, yerCekimi, humanBodyTemp, waterBoilingTemp);

//! fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini
//!  destructuring işlemi uygulayın ve atayın.

const destructuring = [];
countries.forEach((country) => {
    let firstThree = country.substring(0, 3).toLowerCase();
    destructuring.push(firstThree);
});

console.log(destructuring);

//2.WAY
const firstThreeLetters = countries.map((country) =>
    country.substring(0, 3).toLowerCase()
);
console.log(firstThreeLetters);

const [fin, est, sw, den, nor] = firstThreeLetters;
console.log(fin, est, sw, den, nor);
console.log(countries);

//! Dikdörtgen nesnesini özelliklerine veya
//! anahtarlarına göre destructuring işlemi uygulayın.

const { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

//! Kullanıcılar dizisini Iterator ve
//! destructuring kullanarak nesnenin tüm anahtarlarını alın.

for (const { name, scores, skills, age } of users) {
    console.log({ name, scores, skills, age });
}

//! İkiden az beceriye sahip kişileri bulun.
for (const user of users) {
    if (user.skills.length > 2) {
        console.log(user.name);
    }
}
