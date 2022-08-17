//
// 1. add event listener to the deposit button
// 2. get deposit amount from the deposit input field
//2.5.(make sure to convert the string to paresefloat)
// 3.clear peposit field after the input value
//4. get the previous deposit total
//5. calculate new deposit total and set the value to the deposit total
//6.get current balance total
//7. calculate the new balance and set it to the balance total element

//
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const depositTotalElelement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElelement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElelement.innerText = newDepositTotal;

    //step-6
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-7
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;








})