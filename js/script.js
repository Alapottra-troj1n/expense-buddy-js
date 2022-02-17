const calcBtn = document.querySelector("#calc-btn");
const saveBtn = document.querySelector("#save-btn");


calcBtn.addEventListener("click", function () {
  //income balance
  
  const incomeValue = getInputValue("income");

  let totalExpense = getTotalExpenses();
  let totalExpenseFixed = totalExpense.toFixed(2);

  //display total expenses

  document.querySelector("#total-expense-value").innerText = totalExpenseFixed;

  //display remaining balance
  let balanceAfterExpense = incomeValue - totalExpense;
  let balanceAfterExpenseFixed = balanceAfterExpense.toFixed(2);    

  //error handling a vaild balance will always be higher than 0 so any negative value means that expense is higher than income
  if(balanceAfterExpenseFixed >= 0){

    document.querySelector("#total-balance-value").innerText =
    balanceAfterExpenseFixed;
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


//Savings Calculation
saveBtn.addEventListener("click", function(){
  const saveAmountPercentage = getInputValue('save');

  //Error Handling if percentage input is not a number or negative number

  if(isNaN(saveAmountPercentage) || saveAmountPercentage < 0){
    document.querySelector("#error-msg-3").style.display = "block";
    document.querySelector("#success-msg-2").style.display = "none";

  }else{


  


  const totalIncome = getInputValue('income');
  let saveAmount = saveAmountPercentage/100 * totalIncome;
  let saveAmountFixed = saveAmount.toFixed(2);


  document.querySelector("#total-savings-value").innerText = saveAmountFixed;

  const balanceValue = getTexttValue('total-balance');

  let balanceLeftAfterSavings = balanceValue - saveAmount;
  let balanceLeftAfterSavingsFixed = balanceLeftAfterSavings.toFixed(2);

    if(balanceLeftAfterSavingsFixed >= 0){
      document.querySelector('#total-left-value').innerText = balanceLeftAfterSavingsFixed;
      document.querySelector("#error-msg-3").style.display = "none";
      document.querySelector("#success-msg-2").style.display = "block";
      document.querySelector("#error-msg-4").style.display = "none";
    }else{

      document.querySelector('#total-left-value').innerText = 0;
      document.querySelector("#error-msg-4").style.display = "block";
      document.querySelector("#error-msg-3").style.display = "none";
      document.querySelector("#success-msg-2").style.display = "none";
    }
 
  
  };

});






//FUNCTION to get input value

function getInputValue(inputId) {
  const inputValueText = document.getElementById(inputId + "-input").value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

//FUNCTION to get text value
function getTexttValue(inputId) {
  const ValueText = document.getElementById(inputId + "-value").innerText;
  const Value = parseFloat(ValueText);
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
