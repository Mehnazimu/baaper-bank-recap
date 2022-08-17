// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //   step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step-3
    withdrawField.value = '';
    //step-4
    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step-6
    withdrawTotalElement.innerText = newWithdrawTotal;
    //step-7
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-8

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;




})