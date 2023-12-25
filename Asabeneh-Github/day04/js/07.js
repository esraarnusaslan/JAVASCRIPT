function show() {
    const today = document.getElementById('txtToday');
    const result = document.getElementById('result');
    const txtToday = today.value.toLowerCase();

    switch (txtToday) {
        case 'saturday':
        case 'sunday':
            console.log(`${txtToday} is a weekend`);
            break;
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            console.log(`${txtToday} is a working day`);
            break;

        default:
            console.log('Please enter a valid today');
            break;
    }
}
