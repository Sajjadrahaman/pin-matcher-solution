/* 
-----------Pin Generator Code here----------
*/

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 5) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const random = Math.round(Math.random() * 100000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

/* 
-----------Calculator Field and Number button Code here----------
*/

document.getElementById('calculator').addEventListener('click', function (event) {
    const calculatorValue = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(calculatorValue)) {
        if (calculatorValue === 'C') {
            typedNumberField.value = '';
        }
        else if (calculatorValue === "<") {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumberField.value = remainDigits;

        }
    }
    else {
        const newTypedNumber = previousTypedNumber + calculatorValue;
        typedNumberField.value = newTypedNumber;
    }
})

/* 
-----------Pin Matcher Message Code here----------
*/

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const rightPinText = document.getElementById('right-pin');
    const wrongPinText = document.getElementById('wrong-pin');
    if (typedNumber === currentPin) {
        wrongPinText.style.display = 'none';
        rightPinText.style.display = 'block';
    }
    else {
        rightPinText.style.display = 'none';
        wrongPinText.style.display = 'block';
    }
})
// -------------------Complete-Project--------------//