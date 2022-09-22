// JS Factory Function
function buildCalculator()
{
    return {

        // attributes
        display: document.querySelector('.display'),
        clearBtn: document.querySelector('clear-btn'),

        // methods
        sendBtnToDisplay(btnValue)
        {
            this.display.value += btnValue
        },

        clearDisplay()
        {
            this.display.value = ''
        },

        deleteOneValue()
        {
            this.display.value = this.display.value.slice(0, -1) // slice(start, end) or slice(start at 1st input, end at before-last digit)
        },

        doesMathOperation()
        {
            let mathOperation = this.display.value

            try 
            {
                //converts the display string to math JS code
                mathOperation = eval(mathOperation)

                //if empty display (no input)
                if (!mathOperation)
                {
                    alert('Invalid math operation')
                    return
                }
                
                //shows result in this.display
                this.display.value = mathOperation
            }
            catch(err)
            {
                alert('Invalid math operation')
                return
            }
        },

        buttonClick()
        {
            document.addEventListener('click',  e => {
                   
                const el = e.target // the document element that was clicked goes to 'el' const

                if (el.classList.contains('mathOperation-button'))
                {
                    this.sendBtnToDisplay(el.innerText)        
                }
                
                if (el.classList.contains('clear-btn'))
                {
                    this.clearDisplay()
                }

                if (el.classList.contains('delete-btn'))
                {
                    this.deleteOneValue() //deletes the last value from the display
                }

                if (el.classList.contains('equal-btn'))
                {
                    this.doesMathOperation()
                }

                this.display.focus()
            });
        },

        enterKeypress()
        {
            this.display.addEventListener('keyup', e => {
                
                if (e.keyCode === 13)
                {
                    this.doesMathOperation()
                }
            });
        },

        start() 
        {
            this.buttonClick()
            this.enterKeypress()
        }
    };
}

const calculator = buildCalculator()
calculator.start()