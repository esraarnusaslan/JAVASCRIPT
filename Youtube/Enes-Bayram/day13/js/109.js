/* const getStudents = (url) => {
    fetch(url) //Promise is Response type
        .then((response) => {
            return response.json(); //return Promise
        })
        .then((data) => console.log(data))
        .catch((err) => console(err));
};

getStudents('../students.json'); */

const getData = (url) => {
    return fetch(url);
    /*   .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err)); */
};

getData('https://jsonplaceholder.typicode.com/users');
getData('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//!POST

const saveStudents = (url) => {
    fetch('https://jsonplaceholder.typicode.com/user', {
        method: 'POST',
        headers: {
            'Content type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};
