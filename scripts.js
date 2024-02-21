'use strict';

function calculateTotal() {
    let bikesPrice = 0;
    let totalPrice;
    const bikes = document.querySelectorAll('input[name="kolo"]:checked');
    let allSelected = true;

    bikes.forEach(bike => {
        const qtyId = bike.id + "Mnoz";
        const qty = document.getElementById(qtyId).value;
        if (qty > 0) {
            bikesPrice += parseInt(bike.value) * parseInt(qty);
        } else {
            allSelected = false;
        }
    });

    if (!allSelected || bikes.length === 0) {
        alert('Vyberte prosím typ kola a zadejte počet kusů.');
        return;
    }

    const period = document.getElementById('doba').value;
    const price = bikesPrice * parseInt(period);
    const rack = document.querySelector('input[name="nosic"]:checked').value;
    totalPrice = price * parseFloat(rack);

    document.getElementById('celkovaCena').innerText = `Celková cena: ${Math.round(totalPrice)} Kč`;

    const customerPrice = document.getElementById('odhadCena').value;
    if (customerPrice && customerPrice >= Math.round(totalPrice)) {
        document.getElementById('porovnaniCena').innerText = 'Vaše cena pokrývá celkovou cenu zápůjčky.';
    } else {
        document.getElementById('porovnaniCena').innerText = 'Vaše cena nepokrývá celkovou cenu zápůjčky.';
    }
}

function submitForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Prosím, zadejte platnou emailovou adresu.');
        return;
    }
    alert('Formulář byl úspěšně odeslán.');
    location.reload();
}

document.getElementById('kolaForm').addEventListener('submit', submitForm);
