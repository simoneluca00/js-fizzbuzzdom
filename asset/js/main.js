// definire il contenitore
var numeroGenerale = document.getElementById("container_number");

// ciclo "for" per stampa dei numeri in console
for( x = 1; x <= 100; x++ ) {
        // condizione per i multipli di 3 e 5 contemporaneamente
    if ( (x % 3 == 0)  && (x % 5 == 0)) {
        numeroGenerale.innerHTML += `<p class="fizzbuzz">fizzbuzz</p>`;
        // condizione per i multipli di 3
    }  else if ( x % 3 == 0 ) {
        numeroGenerale.innerHTML += `<p class="fizz">fizz</p>`;
        // condizione per i multipli di 5
    }   else if ( x % 5 == 0 ) {
        numeroGenerale.innerHTML += `<p class="buzz">buzz</p>`;
        // condizione per tutti gli altri numeri nè multipli di 3 nè di 5
    }   else {
        numeroGenerale.innerHTML += `<p class="basic">${x}</p>`;
    }
}