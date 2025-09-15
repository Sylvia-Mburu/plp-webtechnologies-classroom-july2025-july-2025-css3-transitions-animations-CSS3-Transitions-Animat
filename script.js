/* ------------------------------
   JS Triggered Animation
--------------------------------*/
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

animateBtn.addEventListener('click', () => {
    animatedBox.classList.add('animate-js');
    // Remove class after animation so it can be retriggered
    animatedBox.addEventListener('animationend', () => {
        animatedBox.classList.remove('animate-js');
    }, { once: true });
});


/* ------------------------------
   Function Demo with Parameters & Return
--------------------------------*/
function sumNumbers(a, b) {
    return a + b; // Returns the sum
}

const calculateBtn = document.getElementById('calculateBtn');
const sumResult = document.getElementById('sumResult');

calculateBtn.addEventListener('click', () => {
    const result = sumNumbers(7, 13); // Example parameters
    sumResult.textContent = `Sum of 7 and 13 is ${result}`;
});


/* ------------------------------
   Form Demo with Scope & Return
--------------------------------*/
const form = document.getElementById('formDemo');
const formOutput = document.getElementById('formOutput');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    function calculateSum(x, y) {
        // Local scope variables x and y
        if (isNaN(x) || isNaN(y)) return 'Please enter valid numbers';
        return x + y;
    }

    formOutput.textContent = `Result: ${calculateSum(num1, num2)}`;
});
