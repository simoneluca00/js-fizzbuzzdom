// definire il contenitore
let numeroGenerale = document.getElementById("container_number");

// ciclo "for" per stampa dei numeri in console
for( let x = 1; x <= 110; x++ ) {
        // condizione per i multipli di 3 e 5 contemporaneamente
    if ( (x % 3 == 0)  && (x % 5 == 0)) {
        let fizzBuzz = "FizzBuzz";
        numeroGenerale.innerHTML += `<p class="fizzbuzz">${fizzBuzz}</p>`;
        // condizione per i multipli di 3
    }  else if ( x % 3 == 0 ) {
        let fizz = "Fizz";
        numeroGenerale.innerHTML += `<p class="fizz">${fizz}</p>`;
        // condizione per i multipli di 5
    }   else if ( x % 5 == 0 ) {
        let buzz = "Buzz";
        numeroGenerale.innerHTML += `<p class="buzz">${buzz}</p>`;
        // condizione per tutti gli altri numeri nè multipli di 3 nè di 5
    }   else {
        numeroGenerale.innerHTML += `<p class="basic">${x}</p>`;
    }
}