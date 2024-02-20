const messageDiv = document.querySelector('#message');

const calculate = () => {
    const midterm = Number(document.querySelector('#midterm').value);
    const final = Number(document.querySelector('#final').value);
    const result = midterm * 0.4 + final * 0.6;
    let point = '';
    switch (true) {
        case result < 30:
            point = 'FF';
            break;
        case result < 40:
            point = 'DD';
            break;
        case result < 50:
            point = 'DC';
            break;
        case result < 60:
            point = 'CC';
            break;
        case result < 70:
            point = 'CB';
            break;
        case result < 80:
            point = 'BB';
            break;
        case result < 90:
            point = 'BA';
            break;
        case result < 100:
            point = 'AA';
            break;

        default:
            point = 'Point is not a valid';
    }
    messageDiv.innerHTML = ` Result: ${point} - ${result}`;
};

const handleDelete = () => {
    messageDiv.remove();
};
