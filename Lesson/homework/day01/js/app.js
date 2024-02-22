button.addEventListener('click', () => {
    const txtNum1 = document.getElementById('txtNum1');
    const txtNum2 = document.getElementById('txtNum2');
    let button = document.getElementById('button');
    const num1 = Number(txtNum1.value);
    const num2 = Number(txtNum2.value);
    if (!num1 || !num2) return;
    const result = num1 + num2;
    const lblResult = document.getElementById('lblResult');
    lblResult.innerHTML = `Result: ${result}`;
});
