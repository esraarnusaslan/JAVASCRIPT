const user = {
    name: 'John Doe',
    age: 30,
    department: {
        name: 'Accounting Manager',
        code: 'AC',
    },
};

const elName = document.querySelector('#name');
elName.innerText = user.name;

const elAge = document.querySelector('#age');
elAge.innerText = user.age;

const elSalary = document.querySelector('#salary');
elSalary.innerText = user.salary;

const elDepartment = document.querySelector('#department');
elDepartment.innerText = user.department.name;

/* 
! eger department diye bir object yoksa hata almamak icin;
! user?.department?.name diye yazilir. (ES11 ile geldi.)
*/
