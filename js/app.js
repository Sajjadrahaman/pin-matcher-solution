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