document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.done-btn');
    
    buttons.forEach(button => {
        const row = button.closest('tr');
        const exerciseId = row.getAttribute('data-exercise');

        // Controlla se l'esercizio è stato già segnato come completato
        if (localStorage.getItem(exerciseId) === 'true') {
            markAsDone(row, button);
        }

        // Aggiungi l'evento click al pulsante
        button.addEventListener('click', function() {
            const isDone = localStorage.getItem(exerciseId) === 'true';
            if (!isDone) {
                localStorage.setItem(exerciseId, 'true');
                markAsDone(row, button);
            }
        });
    });

    // Funzione per segnare l'esercizio come fatto
    function markAsDone(row, button) {
        row.classList.add('done');
        button.textContent = 'Completato';
        button.disabled = true;
        button.style.backgroundColor = '#27ae60'; // Verde per indicare il completamento
    }

    // Funzione per resettare gli esercizi
    const resetButton = document.querySelector('#reset-btn');
    resetButton.addEventListener('click', function() {
        buttons.forEach(button => {
            const row = button.closest('tr');
            const exerciseId = row.getAttribute('data-exercise');
            localStorage.removeItem(exerciseId); // Rimuovi lo stato salvato
            row.classList.remove('done'); // Rimuovi la classe per il completamento
            button.textContent = 'Segna come fatto'; // Ripristina il testo del pulsante
            button.disabled = false; // Riabilita il pulsante
            button.style.backgroundColor = '#e74c3c'; // Ripristina lo stile del pulsante
        });
    });
});
