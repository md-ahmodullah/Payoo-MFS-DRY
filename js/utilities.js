function getInputFieldById(id){
    const addAmount = Number(document.getElementById(id).value);
    return addAmount;
}

function getTextFieldById(id) {
    const balance = Number(document.getElementById(id).innerText);
    return balance;
}

function showSectionById(id) {
    // all are hidden
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('show-transactions').classList.add('hidden');
    // show only provided id
    document.getElementById(id).classList.remove('hidden');
}