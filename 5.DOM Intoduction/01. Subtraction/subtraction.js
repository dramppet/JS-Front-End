function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;

    let rezult = Number(first) - Number(second);

    let output = document.getElementById('result');

    output.textContent = rezult

}