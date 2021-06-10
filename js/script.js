// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


// un array e due numeri (a più piccolo di b).
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
console.log(rangeNum);

