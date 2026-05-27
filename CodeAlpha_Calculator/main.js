class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.memory = 0;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = false;
        this.updateDisplay();
        this.clearOperatorHighlights();
    }

    delete() {
        if (this.shouldResetScreen) return;
        if (this.currentOperand === '0') return;

        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '' || this.currentOperand === '-') {
            this.currentOperand = '0';
        }
        this.updateDisplay();
    }

    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
            this.clearOperatorHighlights();
        }

        // Prevent multiple decimals
        if (number === '.' && this.currentOperand.includes('.')) return;

        // Handle leading zeros
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }

        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' && this.previousOperand !== '') {
            // Allow changing the operator if already selected
            this.operation = operation;
            this.updateDisplay();
            this.highlightOperator(operation);
            return;
        }

        if (this.currentOperand === '') return; // Should likely use 0 if nothing typed but generally we wait for input

        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        // We do NOT reset screen immediately because we want to show the previous result 
        // in upper deck or similar, but standard behavior: 
        // 1. Type 5
        // 2. Hit + (Display shows 5, op is +)
        // 3. Type 3 (Display shows 3)
        // 4. Hit = (Display 8)

        // In this UI:
        // previousOperand shows "5 +"
        // currentOperand shows nothing or 5? 
        // Usually current shows the number we just moved to previous until we type new.
        // Let's mimic that: current becomes empty for logic, but visual might differ. 
        // Actually, let's keep current operand visible until new number is typed?
        // Let's stick to the prompt requirement: "Pressing number after result starts new number"

        this.updateDisplay();
        this.highlightOperator(operation);
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.currentOperand = 'Error';
                    this.previousOperand = '';
                    this.operation = undefined;
                    this.shouldResetScreen = true;
                    this.updateDisplay();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Handle precision issues (e.g. 0.1 + 0.2)
        computation = Math.round(computation * 100000000) / 100000000;

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
        this.updateDisplay();
        this.clearOperatorHighlights();
    }

    getDisplayNumber(number) {
        if (number === 'Error') return number;

        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }

        // Auto-scale font size if number is too long (using relative CSS classes)
        const length = this.currentOperand.toString().length;
        this.currentOperandTextElement.classList.remove('text-medium', 'text-small');

        if (length > 12) {
            this.currentOperandTextElement.classList.add('text-small');
        } else if (length > 8) {
            this.currentOperandTextElement.classList.add('text-medium');
        }

        // Remove inline styles if they exist from previous versions
        this.currentOperandTextElement.style.fontSize = '';
    }

    toggleSign() {
        if (this.shouldResetScreen && !isNaN(this.currentOperand)) {
            this.shouldResetScreen = false;
        }
        if (this.currentOperand === '0') return;
        this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
        this.updateDisplay();
    }

    percentage() {
        this.currentOperand = (parseFloat(this.currentOperand) / 100).toString();
        this.updateDisplay();
    }

    highlightOperator(operator) {
        this.clearOperatorHighlights();
        // Find button with specific text
        const buttons = document.querySelectorAll('.btn-operator');
        buttons.forEach(btn => {
            if (btn.innerText === operator) {
                btn.classList.add('selected');
            }
        });
    }

    clearOperatorHighlights() {
        const buttons = document.querySelectorAll('.btn-operator');
        buttons.forEach(btn => btn.classList.remove('selected'));
    }
}

const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key === '.') {
        calculator.appendNumber(e.key);
    }
    if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission if any
        calculator.compute();
    }
    if (e.key === 'Backspace') {
        calculator.delete();
    }
    if (e.key === 'Escape') {
        calculator.clear();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        let op = e.key;
        if (op === '*') op = '×';
        if (op === '/') op = '÷';
        calculator.chooseOperation(op);
    }
});

// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const themeLabel = document.getElementById('theme-label');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('light-theme');
        themeLabel.innerText = "Switch to Dark";
    } else {
        document.body.classList.remove('light-theme');
        themeLabel.innerText = "Switch to Light";
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Sound Effect
const clickSound = new Audio('audio/immersivecontrol-button-click-sound-463065.mp3');
clickSound.volume = 0.4;

const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.error(e));
    });
});

