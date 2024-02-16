//? PROMISE
/*
let check = false;
 const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve('Promise is successfully');
    } else {
        reject('Promise is not successfully');
    }
});


console.log(promise1); */

/* const createPromise = () => {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve('Promise is successfully');
        } else {
            reject('Promise is not successfully');
        }
    });
};

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('Always works')); */

//? PROMISE + XMLHTTPREQUEST

const readStudents = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                try {
                    const students = JSON.parse(xhr.responseText);
                    resolve(students);
                } catch (error) {
                    reject('There is a problem of the JSON');
                }
            } else {
                reject('Request failed with status ' + xhr.status);
            }
        });
        xhr.addEventListener('error', () => {
            reject('XMLHttpRequest error occurred');
        });

        xhr.open('GET', url);
        xhr.send();
    });
};

readStudents('../students.json')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
