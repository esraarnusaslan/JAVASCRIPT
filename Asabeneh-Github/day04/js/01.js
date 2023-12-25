let value = parseInt(prompt('Enter your age'));
if (value >= 18) {
    alert('You are old enough to drive.');
} else {
    prompt(` You are left with  ${18 - value} years to drive.`);
}
