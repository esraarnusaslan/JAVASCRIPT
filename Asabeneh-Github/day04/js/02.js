let yourAge = Number(prompt('Enter your age'));
const myAge = 30;

if (myAge == yourAge) {
    alert("We're the same age");
} else if (myAge > yourAge) {
    alert(`I am ${myAge - yourAge} years older than you `);
} else if (myAge < yourAge) {
    alert(`You are ${yourAge - myAge} years older than me`);
} else {
    alert('Please enter a valid age');
}
