document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutMoney = getInputFieldById('input-cash-out');
    const pinNumber = getInputFieldById('pin-cash-out');
    
    if (pinNumber === 1234) {
        const balance = getTextFieldById('current-balance');
        const newBalance = balance - cashOutMoney;

        document.getElementById('current-balance').innerText = newBalance;
    } else {
        alert("Wrong PIN! Illegal Access!")
    }
    document.getElementById('input-cash-out').value = '';
    document.getElementById('pin-cash-out').value = '';
})