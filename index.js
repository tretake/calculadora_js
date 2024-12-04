const calculator = {
    displayValue: '0',
    
    currentlyOperator: false,
    operator: null,

    primeiroNumero: null,
    operadorLocked: false,


    calcular: function ()
    {
        let comeco =1 + calculator.displayValue.indexOf(calculator.operator);
        let segundoNumero = parseFloat(calculator.displayValue.slice(comeco,calculator.displayValue.length));
        let resultado = 0;
        switch (calculator.operator)
        {
            case '+':
                resultado = calculator.primeiroNumero + segundoNumero;
                break;
            case '-':
                resultado = calculator.primeiroNumero - segundoNumero;
                break;
            case '*':
                resultado = calculator.primeiroNumero* segundoNumero;
                break;
            case '/':
                resultado = calculator.primeiroNumero/segundoNumero;
                break;
        }
                calculator.displayValue = resultado
                calculator.primeiroNumero = resultado;
                calculator.operadorLocked = false;
                calculator.currentlyOperator = false;
                calculator.operator = null;
    }
};

function updateDisplay()
{
    let display = document.querySelector(".display");

    display.value = calculator.displayValue;
}
function handleOperator(value)
{
    calculator.operator = value;
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
    
    //console.log(value);

    switch (value)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            if(calculator.operadorLocked == false){
                if(calculator.operator == null)
                    calculator.primeiroNumero = parseFloat(calculator.displayValue);              
                handleOperator(value);
                console.log(calculator.primeiroNumero);
}
            break;
        case 'C':
            window.location.reload();
            break;
        case '=':
            if(calculator.operadorLocked == true)
                calculator.calcular();
            break;
        default:
            if(calculator.operator != null)
                calculator.operadorLocked = true;


            calculator.currentlyOperator= false;
            if( calculator.displayValue == 0)
                calculator.displayValue = value;
            else
                calculator.displayValue += value;

    }
    updateDisplay();

}
)



