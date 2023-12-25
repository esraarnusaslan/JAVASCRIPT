function pointAverage() {
    const point1 = document.getElementById('txtPoint1');
    const point2 = document.getElementById('txtPoint2');
    const result = document.getElementById('result');
    const point1Value = Number(point1.value);
    const point2Value = Number(point2.value);

    const average = (point1Value + point2Value) / 2;

    if (average >= 80 && average <= 100) {
        result.innerHTML = `  A `;
    } else if (average >= 70 && average <= 79) {
        result.innerHTML = ` B `;
    } else if (average >= 60 && average <= 69) {
        result.innerHTML = ` C `;
    } else if (average >= 50 && average <= 59) {
        result.innerHTML = ` D `;
    } else if (average >= 0 && average <= 49) {
        result.innerHTML = ` F `;
    } else {
        result.innerHTML = ` Please a valid enter value `;
    }
}
