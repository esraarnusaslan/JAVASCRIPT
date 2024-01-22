import { countries } from '../data/countries.js';

//! Tüm ülkelerin adını, sermayesini,
//! nüfusunu ve dillerini yazdıran ülkeler
//! nesnesine destructuring işlemi uygulayın
//name.common, capitalInfo.latIng, population,languages

/* for (const country of countries) {
    const {
        name: { common },
        capitalInfo: latIng,
        population,
        languages,
    } = country;
    console.log({ common, latIng, population, languages });
} */

//! Küçük bir geliştirici, öğrenci adını, becerilerini
//! ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır.
//! Aşağıdaki dizi adını ada, beceriler dizisini becerilere, puan dizisini
//! puanlara, JavaScript puanını jsScore'a ve React puanını React değişkenine
//! tek bir satırda destructuring işlemi uygulayın.

/* const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;
console.log([name, skills, jsScore, reactScore]); */

//! Diziyi bir structure nesnesine dönüştürebilen
//! convertArrayToObject adlı bir fonksiyon yazın.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

/* const transformedStudents = students.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
}));

console.log(transformedStudents); */

//2.WAY
/* const convertArrayToObject = [];
for (const student of students) {
    const [name, skills, scores] = student;
    convertArrayToObject.push({ name, skills, scores });
}

console.log(convertArrayToObject); */


//! Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e
//! kopyalayın.Yeni nesnede aşağıdakini ekleyin?
//! frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
//! backEnd beceri setlerine 9. seviye Express'i ekleyin
//! dataBase beceri setlerine seviye 8 ile SQL ekleyin
//! dataScience beceri setlerine seviye olmadan SQL ekleyin

/* const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js'],
    },
};

const copiedStudent = { ...student};
console.log(copiedStudent);

copiedStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
copiedStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
copiedStudent.skills.dataBase.push({ skill: 'SQL', level: 8 }); */
