const { test, expect } = require('@playwright/test');
const { basicCalculatorPage } = require('../pages/basicCalculatorPage')


test.describe('', () => {
  let page;
  
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    startPage = new basicCalculatorPage(page);
  });

  test.beforeEach(async () => {
    await startPage.goto();
  });

  for (let i = 9; i >= 0; i--){
    test.only(`testIntCheckbox${i}`, async () => {
      await startPage.chooseBuild(i);
      answer = await page.isEnabled('#integerSelect');
      //console.log(answer);
      expect(answer).toBe(true); // checking if Integer checkbox is enabled
    });
  }

  for (let i = 9; i >= 0; i--){
    test.only(`testTextInput${i}`, async () => {
      await startPage.chooseBuild(i);
      
      const numberFirst = '1st';
      const numberSecond = '2nd';
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst, numberSecond);

      await startPage.getAnswer();
      answer = await page.isVisible('#errorMsgField')
      expect(answer).toBe(true); // checking if Number error appeared
    });
  }

  for (let i = 9; i >= 0; i--){
    test.only(`testAddBuild${i}`, async () => {
      await startPage.chooseBuild(i);

      const numberFirst = Number((Math.random() * (19998) - 9999).toFixed(4));
      const numberSecond = Number((Math.random() * (19998)- 9999).toFixed(4));
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst.toFixed(4), numberSecond.toFixed(4));
      
      await startPage.chooseOperation(0);

      await startPage.integerChoice(false);
      let answerCalculator = await startPage.getAnswer();
      let answerManual = numberFirst + numberSecond
      expect(answerCalculator).toEqual(answerManual.toString()); // checking non Integer answer

      await startPage.integerChoice(true);
      answerCalculator = await startPage.getAnswer();
      expect(answerCalculator).toEqual(Math.trunc(answerManual).toString()); // checking Integer answer
    });
  }

  for (let i = 9; i >= 0; i--){
    test(`testSubtractBuild${i}`, async () => {
      await startPage.chooseBuild(i);

      const numberFirst = Number((Math.random() * (19998) - 9999).toFixed(4));
      const numberSecond = Number((Math.random() * (19998)- 9999).toFixed(4));
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst.toFixed(4), numberSecond.toFixed(4));
      
      await startPage.chooseOperation(1);

      await startPage.integerChoice(false);
      let answerCalculator = await startPage.getAnswer();
      let answerManual = numberFirst - numberSecond
      expect(answerCalculator).toEqual(answerManual.toString()); // checking non Integer answer

      await startPage.integerChoice(true);
      answerCalculator = await startPage.getAnswer();
      expect(answerCalculator).toEqual((Math.trunc(answerManual)).toString()); // checking Integer answer
    });
  }

  for (let i = 9; i >= 0; i--){
    test(`testMultiplyBuild${i}`, async () => {
      await startPage.chooseBuild(i);

      const numberFirst = Number((Math.random() * (19998) - 9999).toFixed(4));
      const numberSecond = Number((Math.random() * (19998)- 9999).toFixed(4));
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst.toFixed(4), numberSecond.toFixed(4));

      await startPage.chooseOperation(2);
      await startPage.integerChoice(false);

      let answerCalculator = await startPage.getAnswer();
      const answerManual = numberFirst * numberSecond
      expect(answerCalculator).toEqual(answerManual.toString()); // checking non Integer answer

      await startPage.integerChoice(true);
      answerCalculator = await startPage.getAnswer();
      expect(answerCalculator).toEqual((Math.trunc(answerManual)).toString()); // checking Integer answer
    });
  }

  for (let i = 9; i >= 0; i--){
    test.only(`testDivideBuild${i}`, async () => {
      await startPage.chooseBuild(i);

      const numberFirst = Number((Math.random() * (19998) - 9999).toFixed(4));
      const numberSecond = Number((Math.random() * (19998)- 9999).toFixed(4));
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst.toFixed(4), numberSecond.toFixed(4));

      await startPage.chooseOperation(3);
      await startPage.integerChoice(false);

      let answerCalculator = await startPage.getAnswer();
      const answerManual = numberFirst / numberSecond
      expect(answerCalculator).toEqual(answerManual.toString()); // checking non Integer answer

      await startPage.integerChoice(true);
      answerCalculator = await startPage.getAnswer();
      expect(answerCalculator).toEqual((Math.trunc(answerManual)).toString()); // checking Integer answer
    });
  }

  for (let i = 9; i >= 0; i--){
    test.only(`testConcatenateBuild${i}`, async () => {
      await startPage.chooseBuild(i);

      const numberFirst = (Math.random() * (19998) - 9999).toFixed(4);
      const numberSecond = (Math.random() * (19998)- 9999).toFixed(4);
      console.log(numberFirst + ' ' + numberSecond);
      await startPage.chooseNumbers(numberFirst, numberSecond);

      await startPage.chooseOperation(4);

      const answerCalculator = await startPage.getAnswer();
      const answerManual = numberFirst + numberSecond
      expect(answerCalculator).toEqual(answerManual); 
    });
  }
});
