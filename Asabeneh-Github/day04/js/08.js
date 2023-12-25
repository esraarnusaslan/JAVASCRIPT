let month = prompt('Enter a month');
let monthLowerCase = month.toLowerCase();
let daysInMonth;

switch (monthLowerCase) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        daysInMonth = 31;
        console.log(daysInMonth);
        break;

    case 'april':
    case 'june':
    case 'september':
    case 'november':
        daysInMonth = 30;
        console.log(daysInMonth);
        break;

    case 'february':
        daysInMonth = 28;
        console.log(daysInMonth);
        break;

    default:
        console.log('Please enter a valid month');
        break;
}
