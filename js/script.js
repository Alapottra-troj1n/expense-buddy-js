const calcBtn = document.querySelector('#calc-btn');









calcBtn.addEventListener('click', function(){
    //income balance
    const incomeValue = getInputValue('income');

    let totalExpense = getTotalExpenses();

    //display total expenses

    document.querySelector('#total-expense-value').innerText = totalExpense;
 
    

});

//function to get input value by giving part of a id as a parameter

function getInputValue(inputId){

    const inputValueText = document.getElementById(inputId + '-input').value;
    const inputValue = parseInt(inputValueText);

  
    

}

//function to get total expense as a value

function getTotalExpenses(){

   //expenses
   const foodValue =  getInputValue('food');
   const rentValue = getInputValue('rent');
   const clothesValue = getInputValue('cloth');

   if(foodValue >= 0 && rentValue >= 0 && clothesValue >= 0){

    //total expense
    let totalExpenses = clothesValue + foodValue + rentValue;

    return totalExpenses;     

   }else{

        console.log('ops');
        return 0;
        
   }
   

   

 

}