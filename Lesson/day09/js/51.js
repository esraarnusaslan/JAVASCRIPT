const names = ['john', 'angela', 'albert', 'mark', 'melissa'];
const lastName = ['doe', 'al', 'messy', 'jackson', 'jack'];

//! For Loop
/* for (let i = 0; i < names.length; i++) { 
} */

//! For in
/* for (let i in names) {
    console.log(names[i]);
} */

const concat = (x, y) => {
    let nameAndLastName = [];
    for (let i in x) {
        nameAndLastName[i] = `${x[i]} ${y[i]}`;
    }
    return nameAndLastName;
};

console.log(concat(names, lastName));
