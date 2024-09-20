document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldById('input-add-money');
    const pinNumber = getInputFieldById('input-pin-number');

    if (isNaN(addMoney)){
        alert('Wrong Amount!');
        return;
    }
    
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

    const p = document.createElement('p');
    p.innerText = `Add money ${addMoney} tk on Sunday, 20 August 2024`;
    p.classList.add("collapse-title", "text-base", "font-medium", "bg-green-700", "text-white");

    document.getElementById('transactions-container').appendChild(p);
})