let season = prompt('please enter a season');
let season2 = season.toLowerCase();

switch (season2) {
    case 'september':
    case 'october':
    case 'november':
        console.log('the season is autumn');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('the season is winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('the season is spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('the season is spring');
        break;

    default:
        console.log('Please enter a valid season');
        break;
}
