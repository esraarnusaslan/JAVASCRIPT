/* //scope.js
function letsLearnScope() {
    var gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
// yukarıdaki çıktı konsol ekranında alacağımız hatanın çıktısıdır.

if (true) {
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    getFullName: function() {
        return `${this.firstName}${this.lastName}`;
    },
    'phone number': '+3584545454545',
};
console.log(person.getFullName());

// "." operatörü kullanarak
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// kçşeli parantez kullanarak
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['age']);
console.log(person['location']); // undefined

// örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
console.log(person['phone number']); */

/* const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)//deleted SasS
      .join(', ')
      console.log(skillsWithoutLastSkill);//HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    console.log(lastSkill);//SasS
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    console.log(skills);//HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS
    let fullName = this.getFullName()
    console.log(fullName);//asabeneh yetayeh
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo()) */

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
    },
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const values = Object.values(copyPerson);
console.log(values);

const entries = Object.entries(copyPerson);
console.log(entries);

console.log(copyPerson.hasOwnProperty('age'));
console.log(copyPerson.hasOwnProperty('score'));
