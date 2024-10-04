// Selezione degli elementi dal DOM
let petto = document.getElementById('petto');
let bicipiti = document.getElementById('bicipiti');
let tricipiti = document.getElementById('tricipiti');
let spalle = document.getElementById('spalle');
let avambracci = document.getElementById('avambracci');
let quadricipiti = document.getElementById('quadricipiti');
let femorali = document.getElementById('femorali');
let polpacci = document.getElementById('polpacci');
let glutei = document.getElementById('glutei');
let bodyContainer = document.getElementById('body-container');
let divNascosto = document.getElementById('div-nascosto');

let pettoNascosto = document.getElementById('petto-n');
let bicipitiNascosto = document.getElementById('bicipiti-n');
let tricipitiNascosto = document.getElementById('tricipiti-n');
let spalleNascosto = document.getElementById('spalle-n');
let avambracciNascosto = document.getElementById('avambracci-n');
let quadricipitiNascosto = document.getElementById('quadri-n');
let femoraliNascosto = document.getElementById('femorali-n');
let polpacciNascosto = document.getElementById('polp-n');
let gluteiNascosto = document.getElementById('glutei-n');

// Immagini per il bottone
const yesImg = '/images/green-check.png';
const noImg = '/images/red-x.png';

// Elemento per la verifica
let checkedV = document.getElementById('v-checked');

// Funzione per gestire l'hover e mostrare i dettagli
function setupHover(element, className, hiddenElement) {
    element.addEventListener('mouseover', function() {
        bodyContainer.classList.replace('img-container', className);
        hiddenElement.style.display = 'block';
    });

    element.addEventListener('mouseout', function() {
        bodyContainer.classList.replace(className, 'img-container');
        hiddenElement.style.display = 'none';
    });
}

// Configura l'hover per ogni parte del corpo
setupHover(petto, 'petto', pettoNascosto);
setupHover(bicipiti, 'bicipiti', bicipitiNascosto);
setupHover(tricipiti, 'tricipiti', tricipitiNascosto);
setupHover(spalle, 'spalle', spalleNascosto);
setupHover(avambracci, 'avambracci', avambracciNascosto);
setupHover(quadricipiti, 'quadricipiti', quadricipitiNascosto);
setupHover(femorali, 'femorali', femoraliNascosto);
setupHover(polpacci, 'polpacci', polpacciNascosto);
setupHover(glutei, 'glutei', gluteiNascosto);

// Funzione per sostituire il bottone con l'immagine
function replaceBtn(button, imgSrc) {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.width = 20;
    img.height = 20;
    img.style.marginBottom = '10px';
    button.parentNode.replaceChild(img, button);
}



// Gestione dei bottoni "sì" e "no"
let yesBtns = document.getElementsByClassName('btn-si');
let noBtns = document.getElementsByClassName('btn-no');

// Imposta il listener per i bottoni "sì"
for (let button of yesBtns) {
    button.addEventListener('click', function() {
        replaceBtn(button, yesImg);
        localStorage.setItem('buttonClicked', 'true');
    });
}

// Imposta il listener per i bottoni "no"
for (let button of noBtns) {
    button.addEventListener('click', function() {
        replaceBtn(button, noImg);
    });
}


// Funzione per aggiornare lo stato dei pulsanti e delle righe
function updateStatus() {
    const buttons = document.querySelectorAll('.done-btn');
    buttons.forEach(button => {
        const day = button.closest('tr').dataset.day;
        const statusText = button.nextElementSibling; // L'elemento <span> accanto al pulsante

        // Controlla se il giorno è segnato come completato nel Local Storage
        if (localStorage.getItem(day) === 'true') {
            button.style.display = 'none'; // Nasconde il pulsante
            button.closest('tr').style.backgroundColor = '#27ae60'; // Cambia il colore di sfondo della riga in verde
            statusText.textContent = ' - Allenamento completato'; // Aggiunge il testo di stato
            statusText.style.color = '#fff'; // Cambia il colore del testo di stato
        } else {
            button.style.display = 'inline-block'; // Mostra il pulsante se non completato
            button.closest('tr').style.backgroundColor = ''; // Reset del colore di sfondo
            statusText.textContent = ''; // Rimuove il testo di stato
        }
    });
}

// Aggiungi un evento di ascolto a tutti i pulsanti "Segna come fatto"
const buttons = document.querySelectorAll('.done-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const day = this.closest('tr').dataset.day; // Prende il giorno dalla riga
        localStorage.setItem(day, 'true'); // Salva lo stato nel Local Storage
        updateStatus(); // Aggiorna lo stato
    });
});

// Funzione per resettare gli allenamenti
document.querySelector('.reset-btn').addEventListener('click', function() {
    const buttons = document.querySelectorAll('.done-btn');
    buttons.forEach(button => {
        const day = button.closest('tr').dataset.day; // Prende il giorno dalla riga
        localStorage.removeItem(day); // Rimuove lo stato dal Local Storage
    });
    updateStatus(); // Aggiorna lo stato per riflettere i cambiamenti
});

// Al caricamento della pagina, controlla lo stato
document.addEventListener('DOMContentLoaded', updateStatus);



