const salary = [2000, 3500, 3200, 4000, 1500, 1200, 4500, 5500];

const totalSalary = salary
    .filter((salary) => salary < 3000) //[2000, 1500, 1200]
    .map((salary) => salary * 1.1) //['2200.00', '1650.00', '1320.00']
    .reduce((total, salary) => total + salary, 0);

console.log(totalSalary);
