//! esercizio 1
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


var database = ["marco", "matteo", "sofia", "luca", "paola", "carmela", "giovanni"];


var valoreMax = parseInt(prompt("inserisci un numero"));
var valoreMin = parseInt(prompt("inserisci un numero"));



// funzione
function takeRange (array, min, max){
    var range = [];
    for (var i = min - 1; i < max; i++) {
        range.push(array[i]);
    }

    return range;

}

var rangeNum = takeRange (database, valoreMax, valoreMin)
document.getElementById("esecizio_1").innerHTML = rangeNum;


//! esercizio 2
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// inserire due parole.

var word1 = prompt("inserisci una parola qui");

console.log(word1.length);

var word2 = prompt("inserisci una parola qui");

console.log(word2.length);

// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.

function verificaLunghezza (parola1, parola2){


    if (parola1.length > parola2.length){
        return parola1 + " è la parola più lunga";
    }else if (parola1.length == parola2.length){
        return parola1 + " & " + parola2 + " sono lunghe ugali";
    }else {
        return parola2 + " è la parola più lunga";
    }
}

var validator = verificaLunghezza(word1, word2);
document.getElementById("esecizio_2").innerHTML = validator;


//! esercizio 3