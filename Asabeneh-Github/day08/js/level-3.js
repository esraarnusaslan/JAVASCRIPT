//! 1) Create an object literal called personAccount.
//! It has firstName, lastName, incomes, expenses properties and
//!it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
//!accountBalance methods. Incomes is a set of incomes and its description
//! and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Esra',
    lastName: 'Arnus',
    incomes: [],
    expenses: [],
    totalIncome() {
        //gelir
        let total = 0;
        for (let income of this.incomes) {
            total += income.amount;
        }
        return total;
    },
    totalExpense() {
        //gider
        let total = 0;
        for (let expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },
    accountInfo() {
        //hesap bilgisi
        return `Name: ${this.firstName} ${
            this.lastName
        }, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
    },
    addIncome(description, amount) {
        //gelir ekle
        this.incomes.push({ description, amount });
    },
    addExpense(description, amount) {
        //gider ekle
        this.expenses.push({ description, amount });
    },
    accountBalance() {
        //hesap bakiyesi
        return this.totalIncome() - this.totalExpense();
    },
};

personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelancing', 1000);
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Food', 300);

console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());

//! 2) **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
];

//! 2) Imagine you are getting the above users collection from a MongoDB database.
//! a. Create a function called signUp which allows user to add to the collection.
//!  If user exists, inform the user that he has already an account.
//! b. Create a function called signIn which allows user to sign in to the application

//SignIn

const signIn = (email, password) => {
    const foundUser = users.find(
        (user) => user.email === email && user.password === password
    );
    if (foundUser) {
        console.log('Login Successfully');
        foundUser.isLoggedIn = true;
    } else {
        console.log('Please enter a valid email or password');
    }
};

const enterEmail = 'a@asab.com';
const enterPassword = '123456';
signIn(enterEmail, enterPassword);

//Sign Up

const signUp = (username, email, password) => {
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        console.log('user already exists. Please log in');
    } else {
        const newUser = {
            _id: Math.random().toString(36).substring(2, 9),
            username,
            email,
            password,
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false,
        };
        users.push(newUser);
        console.log('User successfully registered');
    }
};

signUp('EsraArnus', 'esra.arnus@gmail.com', '1234567');
signUp('Alex', 'alex@alex.com', '123123');

//! 3) The products array has three elements and each
//! of them has six properties. a. Create a function called
//! rateProduct which rates the product b. Create a function
//! called averageRating which calculate the average rating of a product

const rateProduct = (productId, userId, rating) => {
    const product = products.find((product) => product._id === productId);

    if (product) {
        product.ratings.push({ userId, rate: rating });
        console.log('Product rated successfully.');
        console.log(products);
    } else {
        console.log('Product not found.');
    }
};

rateProduct('aegfal', 'thomas123', 4);

const averageRating = (productId) => {
    const product = products.find((product) => product._id === productId);

    if (product && product.ratings.length > 0) {
        const totalRating = product.ratings.reduce(
            (acc, curr) => acc + curr.rate,
            0
        );
        const average = totalRating / product.ratings.length;
        console.log(
            `Average rating for ${product.name}: ${average.toFixed(2)}`
        );
        return average;
    } else {
        console.log('Product not found or no ratings available.');
        return 0;
    }
};

averageRating('aegfal');

//! 4) Create a function called likeProduct.
//! This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (productId, userId) => {
    const product = products.find((product) => product._id === productId);

    if (product) {
        const userLikedIndex = product.likes.indexOf(userId);

        if (userLikedIndex === -1) {
            product.likes.push(userId);
            console.log('Product liked.');
            console.log(products);
        } else {
            product.likes.splice(userLikedIndex, 1);
            console.log('Product unliked.');
        }
    } else {
        console.log('Product not found.');
    }
};

likeProduct('eedfcf', 'thomas123');
