let numeroChilometri = parseFloat(prompt("quanti chilometri vuoi percorrere?"));
let eta = parseInt(prompt("età del passeggero? "));


const prezzoAlChilometro = 0.21;

let prezzo = numeroChilometri * prezzoAlChilometro;
let persona = `maggiorenne`;
if(eta < 18){
    prezzo *= 0.80;
    document.writeln (`il costo del biglietto per i minorenni è : ${ prezzo.toFixed(2) }€`);

}else if(eta > 65){
    prezzo *= 0.60
    document.writeln (`il costo del biglietto per gli over 65 è : ${ prezzo.toFixed(2) }€`);

}else{
    document.writeln(`il costo del biglietto è : ${prezzo.toFixed(2)}€ per i ${persona} `);
}

