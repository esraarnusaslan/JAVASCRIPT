let text = "I'm learning javascript right now";
let letter = prompt('Please enter a letter');

let result = bul(letter);
alert(`Letter : ${result}`);

function bul(letter) {
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i).toLowerCase() === letter.toLowerCase()) {
            sum += 1;
        }
    }
    return sum;
}
