
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};


const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Cambiar a modo oscuro';
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#f8f9fa';
        card.style.color = '#007bff';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'initial';
        card.style.color = 'initial';
    });
});


const contactoLink = document.getElementById('contacto-link');
if (contactoLink) {
    contactoLink.addEventListener('click', () => {
        window.location.href = 'adoniszl@outlook.com';
    });
}



const showAlertButton = document.getElementById('showAlertButton');


showAlertButton.addEventListener('click', function () {

    alert('Aquí hay algunos consejos importantes sobre los pandas, ¡léalos atentamente!');
});



const contactoForm = document.querySelector('form');

const correoInput = document.getElementById('correo');


correoInput.addEventListener('input', function () {
    if (correoInput.value.includes('example.com')) {
        contactoForm.style.backgroundColor = '#ffdddd';
    } else {
        contactoForm.style.backgroundColor = 'initial';
    }
});