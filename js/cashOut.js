document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutMoney = getInputFieldById('input-cash-out');
    const pinNumber = getInputFieldById('pin-cash-out');
    
    if (isNaN(cashOutMoney)){
        alert('Wrong Amount!');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldById('current-balance');

        if (cashOutMoney > balance){
            alert('Insufficient Balance!');
            return;
        }

        const newBalance = balance - cashOutMoney;

        document.getElementById('current-balance').innerText = newBalance;
    } 
    else {
        alert("Wrong PIN! Illegal Access!")
    }
    document.getElementById('input-cash-out').value = '';
    document.getElementById('pin-cash-out').value = '';

    const p = document.createElement('p');
    p.innerText = `Cash out ${cashOutMoney} tk on Sunday, 20 August 2024`;
    p.classList.add("collapse-title", "text-base", "font-medium", "bg-red-700", "text-white");

    document.getElementById('transactions-container').appendChild(p);
})