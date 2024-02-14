class Person {
    constructor(name, lastName, salary, age) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.age = age;
    }

    showInformation() {
        console.log(
            `Name: ${this.name} LastName: ${this.lastName} Salary: ${this.salary} Age: ${this.age}`
        );
    }
}

const person1 = new Person('John', 'Doe', 2500, 32);
person1.showInformation();