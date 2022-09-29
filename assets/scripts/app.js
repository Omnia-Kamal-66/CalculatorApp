const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initalResult, enteredNumber);
  writeToLog("add", initalResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initalResult, enteredNumber);
  writeToLog("subtract", initalResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initalResult, enteredNumber);
  writeToLog("multiply", initalResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initalResult, enteredNumber);
  writeToLog("divide", initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);