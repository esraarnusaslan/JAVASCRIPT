const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node',
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: 'paul@paul.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node',
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};

//! 1) Find the person who has many skills in the users object.

const findPersonWithMostSkills = (users) => {
    let mostSkills = 0;
    let personWithMostSkills = '';
    for (let i in users) {
        if (users[i].skills.length > mostSkills) {
            mostSkills = users[i].skills.length;
            personWithMostSkills = i;
        }
    }
    return personWithMostSkills;
};

console.log(findPersonWithMostSkills(users)); //Asab

//! 2) Count logged in users, count users having greater than equal to 50 points from the following object.

const loggedIn = (users) => {
    let loggedInCount = 0;
    let highPointsCount = 0;

    for (let i in users) {
        if (users[i].isLoggedIn) {
            loggedInCount++;
        }
        if (users[i].points === 50) {
            highPointsCount++;
        }
    }
    return `logged in ${loggedInCount}, points ${highPointsCount}`;
};
console.log(loggedIn(users));

//! 3) Find people who are MERN stack developer from the users object

const isMernStackDeveloper = (users) => {
    let mernDevelopers = [];

    for (let user in users) {
        const skills = users[user].skills;

        if (
            skills.includes('MongoDB') &&
            skills.includes('Express') &&
            skills.includes('React') &&
            skills.includes('Node')
        ) {
            mernDevelopers.push(user);
        }
    }

    return mernDevelopers;
};

//! 4) Set your name in the users object without modifying the original users object
console.log(isMernStackDeveloper(users));

const copy = Object.assign({}, users);
copy.Esra = {
    email: 'esra.arnus@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MongoDB'],
    age: 31,
    isLoggedIn: false,
    points: 50,
};
console.log(copy);

//! 5) Get all keys or properties of users object
console.log(Object.keys(users));
console.log(Object.values(users));

//! 6) Get all the values of users object
console.log(Object.entries(users));

//! 7)Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Turkey: {
        capital: 'Ankara',
        population: 82000000,
        languages: ['Turkish'],
    },
    Germany: {
        capital: 'Berlin',
        population: 83000000,
        languages: ['German'],
    },
    France: {
        capital: 'Paris',
        population: 67000000,
        languages: ['French'],
    },
};
