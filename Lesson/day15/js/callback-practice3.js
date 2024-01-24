const order = (cb) => {
    setTimeout(() => {
        console.log('Order');
        cb();
    }, 4500);
};

const eatMeal = (cb) => {
    setTimeout(() => {
        console.log('Eat Meal');
        cb();
    }, 3000);
};

const watchFilm = (cb) => {
    setTimeout(() => {
        console.log('Watch Film');
        cb();
    }, 6000);
};

const drinkCoffee = (cb) => {
    setTimeout(() => {
        console.log('Drink coffee');
        cb();
    }, 1500);
};

//! callback chain

order(() => {
    eatMeal(() => {
        watchFilm(() => {
            drinkCoffee(() => {});
        });
    });
});
