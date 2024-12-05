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
    },

    updateDisplay: function()
    {
        document.querySelector(".display").value = this.displayValue;
    },

    handleOperator(value){
        this.operator = value;
    if(this.currentlyOperator === true)
        this.displayValue = this.displayValue.slice(0,-1);
    this.displayValue += value;
    this.currentlyOperator = true;
    }
};
calculator.updateDisplay();
const keys = document.querySelector('.butoes');





keys.addEventListener("click" , event => {
    const { target } = event;
    const { value } = target;

    

    if(!target.matches("button") )
        return;
    
    switch (value)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            if(calculator.operadorLocked == false){
                if(calculator.operator == null)
                    calculator.primeiroNumero = parseFloat(calculator.displayValue);              
                calculator.handleOperator(value);}
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
    calculator.updateDisplay();

}
)



