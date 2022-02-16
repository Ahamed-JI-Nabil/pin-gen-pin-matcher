function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        document.getElementById('display-pin').value = pin;
    }
    else {
        generatePin();
    }
}



document.getElementById('calc-numbers').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const display = document.getElementById('display-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            display.value = '';
            document.getElementById('fail-message').style.display = 'none';
            document.getElementById('success-message').style.display = 'none';
            
        }
    }
    else {

        const previousNumber = display.value;
        const newNumber = previousNumber + number;
        display.value = newNumber;
    }

})




function checkPin() {

    const displayPin = document.getElementById('display-pin').value;
    const displayNumber = document.getElementById('display-numbers').value;
    const failMessage = document.getElementById('fail-message');
    const successMessage = document.getElementById('success-message');


    if (displayPin == displayNumber) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }

}










