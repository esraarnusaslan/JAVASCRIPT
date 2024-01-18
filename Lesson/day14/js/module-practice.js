//! Sorting
/*
eger negatif doner a be den once siralanir
eger pozitif doneerse b a dan once siralanir
eger sifir donerse degisiklik olmaz
*/

const numberSortASC = (arr) => {
    return arr.sort((a, b) => a - b);
}; //kucukten buyuge

const numberSortDESC = (arr) => {
    return arr.sort((a, b) => b - a);
};

const stringSortASC = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
};

const stringSortDESC = (arr) => {
    return arr.sort((a, b) => b.localeCompare(a));
};

export { numberSortASC, stringSortASC, stringSortDESC, numberSortDESC };
