/*
-- Google distance service: calculate the distance between two points
-- Car Rental service: pricing by with vehicle and distance 
-- Payment service:  payment with price 
*/

const getDistance = (a, b, cb) => {
    setTimeout(() => {
        const result = (a - b) * Math.floor(Math.random() * 50) + 1;
        cb(result);
    }, 3000);
};

const getCarPrice = (car, distance, cb) => {
    setTimeout(() => {
        const result = distance * Math.floor(Math.random() * 100) + 1;
        cb(result);
    }, 1500);
};

const doPayment = (price, cb) => {
    setTimeout(() => {
        const result = Math.random() - 0.5;
        cb(result > 0 ? true : false);
    }, 4000);
};

//! callback chain
getDistance(60, 20, (distance) => {
    console.log(`Distance: ${distance}`);
    getCarPrice('Mercedes', distance, (price) => {
        console.log(`Price: ${price}`);
        doPayment(2500, (isSuccess) => {
            console.log(isSuccess ? 'Success!' : 'Not Success!');
        });
    });
});
