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
    const random = Math.round(Math.random()*100000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click',function(event){
    const calculatorValue = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(calculatorValue)){
        if(calculatorValue === 'C'){
            typedNumberField.value = '';
        }
        else if(calculatorValue === "<"){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumberField.value = remainDigits; 
            
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + calculatorValue;
        typedNumberField.value = newTypedNumber;
    }
})