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

/* const readStudents = (url) => {
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
}; */

/* readStudents('../students.json')
    .then((response) => console.log(response))
    .catch((error) => console.log(error)); */

/* const getUsers = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            try {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        });
        xhr.open('GET', url);
        xhr.send();
    });
};

getUsers('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        //console.log(data);
        data.forEach(user => {
            console.log(user.name);
        });
        console.log('then we can run different asynchronous codes');
    })
    .catch((error) => console.log(error))
    .finally(() => {
        //mail.send
    }); */

const p1 = Promise.resolve('First promise is successful');
const p2 = Promise.resolve('Second promise is successful');
const p3 = new Promise((resolve, reject) => {
    resolve('Third promise is successful');
});
const p4 = Promise.reject('Error');

Promise.all([p1, p2, p3, p4])
    .then((res) => {
        //console.log(res);
        for (const value of res) {
            console.log(value);
        }
    })
    .catch((err) => {
        console.log(err);
    });
