const calcBtn = document.querySelector("#calc-btn");
const saveBtn = document.querySelector("#save-btn");


calcBtn.addEventListener("click", function () {
  //income balance
  
  const incomeValue = getInputValue("income");

  let totalExpense = getTotalExpenses();

  //display total expenses

  document.querySelector("#total-expense-value").innerText = totalExpense;

  //display remaining balance
  let balanceAfterExpense = incomeValue - totalExpense;


  //error handling a vaild balance will always be higher than 0
  if(balanceAfterExpense >= 0){

    document.querySelector("#total-balance-value").innerText =
    balanceAfterExpense;
    saveBtn.disabled = false;

  }else if(isNaN(incomeValue)){
    document.querySelector("#error-msg").style.display = "block";
    document.querySelector("#error-msg-2").style.display = "none";
    document.querySelector("#success-msg").style.display = "none";
  }
  else{
    document.querySelector("#error-msg").style.display = "none";
    document.querySelector("#error-msg-2").style.display = "block";
    document.querySelector("#success-msg").style.display = "none";
    document.querySelector("#total-balance-value").innerText = '0';
  }

});

saveBtn.addEventListener("click", function(){
  const saveAmountPercentage = getInputValue('save');
  const totalIncome = getInputValue('income');
  let saveAmount = saveAmountPercentage/100 * totalIncome;


  document.querySelector("#total-savings-value").innerText = saveAmount;

  const balanceValue = getTexttValue('total-balance');

  const balanceLeftAfterSavings = balanceValue - saveAmount;

  document.querySelector('#total-left-value').innerText = balanceLeftAfterSavings;
  
  

});






//FUNCTION to get input value

function getInputValue(inputId) {
  const inputValueText = document.getElementById(inputId + "-input").value;
  const inputValue = parseInt(inputValueText);
  return inputValue;
}
function getTexttValue(inputId) {
  const ValueText = document.getElementById(inputId + "-value").innerText;
  const Value = parseInt(ValueText);
  return Value;
}





//FUNCTION to get total expense as a value

function getTotalExpenses() {

  //expenses

  const foodValue = getInputValue("food");
  const rentValue = getInputValue("rent");
  const clothesValue = getInputValue("cloth");
  const incomeValue = getInputValue("income");

  //error-handling

  if (
    foodValue >= 0 &&
    rentValue >= 0 &&
    clothesValue >= 0 &&
    incomeValue >= 0
) {

    //total expense
    document.querySelector("#error-msg").style.display = "none";
    document.querySelector("#error-msg-2").style.display = "none";
    document.querySelector("#success-msg").style.display = "block";

    let totalExpenses = clothesValue + foodValue + rentValue;

    return totalExpenses;

  } else {
    document.querySelector("#success-msg").style.display = "none";
    document.querySelector("#error-msg-2").style.display = "none";
    document.querySelector("#error-msg").style.display = "block";
    return 0;
  }
}
