class Mathematics {
    add(a, b) {
        console.log(a + b);
    }
    static subtract(a, b) {
        console.log(a - b);
    }
    plenty(a, b) {
        console.log(a / b);
    }
    multiply(a, b) {
        console.log(a * b);
    }
}

//! this is non static
const math = new Mathematics();
math.add(100, 200);

//! this is static
Mathematics.subtract(10, 3);

class Person {
    firstName = 'Esra';

    write() {
        console.log(this.firstName);
    }
}

class Student extends Person {
    write() {
        super.write();
    }
}

const student1 = new Student();
student1.write();
