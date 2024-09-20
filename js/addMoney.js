document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldById('input-add-money');
    const pinNumber = getInputFieldById('input-pin-number');
    
    // verify in bad way due to lack of backend knowledge
    if (pinNumber === 1234) {
        const currentBalance = getTextFieldById('current-balance');
        const newBalance = addMoney + currentBalance;
        console.log(newBalance);

        document.getElementById('current-balance').innerText = newBalance;
        
    } else {
        alert('Wrong PIN or Phone Number!');
    }
    document.getElementById('input-add-money').value = '';
    document.getElementById('input-pin-number').value = '';
})