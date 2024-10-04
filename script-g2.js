// Seleziona tutti i pulsanti "segna come fatto"
const doneButtons = document.querySelectorAll('.done-btn');

// Aggiungi un listener a ciascun pulsante
doneButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.style.backgroundColor = '#2ecc71'; // Colore verde quando completato
        row.style.color = '#ffffff'; // Cambia il colore del testo in bianco
        button.disabled = true; // Disabilita il pulsante dopo il clic
        button.innerText = 'Fatto!'; // Cambia il testo del pulsante
        localStorage.setItem(`exercise${index}`, 'done'); // Memorizza il completamento nell'archiviazione locale
    });
});

// Resetta tutti gli esercizi
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', () => {
    doneButtons.forEach((button, index) => {
        const row = button.closest('tr');
        row.style.backgroundColor = ''; // Ripristina il colore di sfondo
        row.style.color = ''; // Ripristina il colore del testo
        button.disabled = false; // Riabilita il pulsante
        button.innerText = 'Segna come fatto'; // Ripristina il testo del pulsante
        localStorage.removeItem(`exercise${index}`); // Rimuovi il completamento dall'archiviazione locale
    });
});

// Controlla lo stato dei pulsanti al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    doneButtons.forEach((button, index) => {
        if (localStorage.getItem(`exercise${index}`) === 'done') {
            const row = button.closest('tr');
            row.style.backgroundColor = '#2ecc71'; // Colore verde per gli esercizi completati
            row.style.color = '#ffffff'; // Colore del testo in bianco
            button.disabled = true; // Disabilita il pulsante
            button.innerText = 'Fatto!'; // Cambia il testo del pulsante
        }
    });
});
