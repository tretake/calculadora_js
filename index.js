const calculator = {
    displayValue: '0',
    firstOperand: null,
    
    currentlyOperator: false,

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
    if(calculator.currentlyOperator === true)
        calculator.displayValue = calculator.displayValue.slice(0,-1);
    calculator.displayValue += value;
    calculator.currentlyOperator = true;
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
            calculator.currentlyOperator= false;
            if( calculator.displayValue == 0)
                calculator.displayValue = value;
            else
                calculator.displayValue += value;

    }
    updateDisplay();
    console.log(calculator.currentlyOperator)

}
 )