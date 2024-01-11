document.getElementById('frmLogin').addEventListener('submit', (e) => {
    e.preventDefault(); //default olan submit davranisi engellendi

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    try {
        //error handling
        const email = txtEmail.value;
        const password = txtPassword.value;

        //form handling
        if (!email || !isEmailValid(email))
            throw new Error('Please enter a valid email');
        if (!password) throw new Error('Please enter a valid password');

        e.target.submit();
    } catch (err) {
        alert(err.message);
    }
});

//! isEmailValid
const isEmailValid = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};
