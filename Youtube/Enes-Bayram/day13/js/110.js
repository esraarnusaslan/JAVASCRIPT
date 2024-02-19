/* const hello = async () => {
    return 'Hello World!';
};

console.log(hello());
hello().then((response) => console.log(response));

document.querySelector('#button').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            fetch(
                `https://jsonplaceholder.typicode.com/comments?postId=${data.id}`
            )
                .then((response) => response.json())
                .then((comments) => console.log(comments));
        })
        .catch((error) => console.log(error));
}); */

//! by async await
/* document.querySelector('#button').addEventListener('click', async () => {
    const responsePost = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
    );
    const post = await responsePost.json();
    const responseComments = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    );
    const comments = await responseComments.json();

    console.log(post, comments);
}); */

document.querySelector('#button').addEventListener('click', async () => {
    const post = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
    ).json();

    const comments = await (
        await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
        )
    ).json();

    console.log(post, comments);
});
