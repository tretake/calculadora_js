const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

function updateDisplay()
{
    let display = document.querySelector(".display");

    display.value = calculator.displayValue;
}
function handleOperator(value)
{
    calculator.displayValue += value;
}

updateDisplay();
const keys = document.querySelector('.butoes');
keys.addEventListener("click" , event => {
    const { target } = event;
    const { value } = target;

    

    if(!target.matches("button") )
    {
        return;
    }
    
    console.log(value);

    switch (value)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case 'C':
            calculator.displayValue = '0';
            break;
        default:
            if( calculator.displayValue == 0)
                calculator.displayValue = value;
            else
                calculator.displayValue += value;

    }
    updateDisplay();


}
 )