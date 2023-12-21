function calculate() {
    const txtScore = document.getElementById('txtScore');
    const score = Number(txtScore.value);

    !(score >= 0 && score <= 100) && alert('Score must be between 0 and 100');
}
