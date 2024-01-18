const arr = [2, 4, 6, 8, 10, 20, 30];

const sum = (n1, n2, n3, n4, n5, n6, n7) => {
    return n1 + n2 + n3 + n4 + n5 + n6 + n7;
};

//console.log(sum(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]));//80

console.log(sum(...arr)); //80  //! SPREAD

function x(...number) {} //! REST
