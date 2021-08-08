exports.basicCalculatorPage = class basicCalculatorPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async chooseBuild(buildNumber) {
        await this.page.isVisible('#selectBuild');
        await this.page.selectOption('#selectBuild', `${buildNumber}`);
    }

    async chooseNumbers(firstNumber, secondNumber) {
        await this.page.fill('#number1Field', firstNumber);
        await this.page.fill('#number2Field', secondNumber);
    }

    async chooseOperation(operationNumber) {
        await this.page.isVisible('#selectOperationDropdown');
        await this.page.selectOption('#selectOperationDropdown',`${operationNumber}`);
    }

    async getAnswer(){
        await this.page.click('#calculateButton')
        return this.page.inputValue('#numberAnswerField')
    }
     
    async integerChoice(boolChoice){
        if(boolChoice === true){
            await this.page.check('#integerSelect')
        }
        else {
            await this.page.uncheck('#integerSelect')
        }
    }
        
}