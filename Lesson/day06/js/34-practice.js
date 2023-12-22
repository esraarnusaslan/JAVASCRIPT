function age(birthYear) {
    const date = new Date();
    const year = date.getFullYear();
    return year - birthYear;
}
const newAge = age(1991);
alert(`your age: ${newAge}`);
