function getArea(a, b) {
    const area = (a ?? 0) * (b ?? 0);

    // ! a ve b null veya undefined ise 0 al demek.

    document.querySelector('#result').innerText = area;
}

getArea(5); //0
getArea(5, 15); //75
