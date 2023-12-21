function showSalary() {
    const txtSalary = document.getElementById('txtSalary');
    const elResult = document.getElementById('result');

    const elStatus = document.querySelector("input[name='status']:checked");

    const salary = Number(txtSalary.value);
    const status = elStatus.value;

    const newSalary = status === 'retired' ? salary * 0.9 : salary * 0.95;
    console.log(newSalary);

    elResult.innerHTML = `Your Salary is <u>${newSalary}</u>`;
}
