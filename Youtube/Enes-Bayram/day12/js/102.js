//! ASENKRON
/*
1-timing function
2-event
3-http request

*/
//! callback- promise-async-await
//! asenkron lari senktron a cevirme

//* http request

const users = [
    {
        userId: 5,
        post: 'Esra Post 1',
    },
    {
        userId: 5,
        post: 'Esra Post 2',
    },
    {
        userId: 5,
        post: 'Esra Post 3',
    },
    {
        userId: 6,
        post: 'Volkan Post 1',
    },
    {
        userId: 7,
        post: 'Tom Post 1',
    },
];

//! senkrona cevirecegiz
//*callback-promise-async-await
function getUserId(userId) {
    setTimeout(() => {
        return 5;
    }, 1000);
}

function getPostByUserId(userId) {
    console.log(userId);
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 2500);
}

let userId = getUserId();
getPostByUserId(userId);
