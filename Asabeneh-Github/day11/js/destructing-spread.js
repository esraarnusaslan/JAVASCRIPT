/* const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)



const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)



const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)


  const numbers2 = [1, 2, 3]
  let [numOne2, , numThree2] = numbers //2 atlandı

  console.log(numOne2, numThree2)


  const names2 = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson2, , fourthPerson2] = names // birinci ve üçüncü değer atlandı

  console.log(secondPerson2, fourthPerson2)


  const names3 = [undefined, 'Brook', 'David']
let [
  firstPerson3 = 'Asabeneh',
  secondPerson3,
  thirdPerson3,
  fourthPerson3 = 'John'
] = names

console.log(firstPerson3, secondPerson3, thirdPerson3, fourthPerson3)   */

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

for (const [country, city] of countries) {
    console.log(country, city);
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];

for (const [first, second, third] of fullStack) {
    console.log(first, second, third);
}

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter) */

/*   const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p) */

/*   const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
  console.log(width, height, area, perimeter) //30 10 200 80 */

/*const rect = {
    width: 30,
    height: 10,
};

const calculatePerimeter = () => {
     return 2 * (rect.width + rect.height);
};

console.log(calculatePerimeter(rect)); 

const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60*/

//Başka örnek
/*const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
};
// person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım

 const getPersonInfo = (obj) => {
    const skills = obj.skills;
    console.log(skills);
    const formattedSkills = skills.slice(0, -1).join(', ');
    console.log(formattedSkills);//HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python

    const languages = obj.languages;
    const formattedLanguages = languages.slice(0, -1).join(', ');
    console.log(formattedLanguages);//Amharic, English


    personInfo = `${obj.firstName} ${obj.lastName} lives in ${
        obj.country
    }. He is  ${obj.age} years old. He is an ${
        obj.job
    }. He teaches ${formattedSkills} and ${
        skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo;
};

console.log(getPersonInfo(person)); */

// person nesnesi hakkında destructuring kullanarak bilgi veren bir fonksiyon oluşturalım
/*const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages,
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ');
    const formattedLanguages = languages.slice(0, -1).join(', ');

    personInfo = `${firstName} ${lastName} lives in ${country}. 
    He is ${age} years old. He is an ${job}. 
    He teaches ${formattedSkills} and ${
        skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo;
};
console.log(getPersonInfo(person));

  Asabeneh Yetayeh lives in Finland. He is  250 years old. 
  He is an Instructor and Developer. He teaches HTML, CSS, JavaScript,
   React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  


   const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }

    const countries = [
        'Germany',
        'France',
        'Belgium',
        'Finland',
        'Sweden',
        'Norway',
        'Denmark',
        'Iceland'
      ]
      
      let [gem, fra, , ...nordicCountries] = countries
      
      console.log(gem)//germany
      console.log(fra)//france
      console.log(nordicCountries)//['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
*/

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers); //[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
