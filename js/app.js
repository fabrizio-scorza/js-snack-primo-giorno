console.log('Funziona!!!')

//dichiarazione variabile number con valore 100 e stampa in console
let number =100; //number

console.log(number);

// dichiarazione di una costante pi con valore 3.14 e stampa in console
const pi =3.14; //number

console.log(pi);

// riassegnazione del valore a pi ERRORE in console non si può riassegnare un valore ad una costante
//pi =3.1416; //number

//console.log(pi);

// creazione di una seconda costante per il valore di pi con più decimali

const pi4Dec = 3.1416; //number

console.log(pi4Dec);

//Dichiarazione di una variabile radius con valore 8 dichiarazione della variabile circle con valore 2*pi*radius e stampa in console

let radius =8; //number
let circle = radius*2*pi; //number

console.log(circle);

circle = radius*2*pi4Dec; //number

console.log('circonferenza più precisa : ' + circle);

//Dichiarazione di una variabilile nome e assegnazione della stringa carlo con successiva modifica del valore e stampa del nuovo valore in console

let name ='Marco'; //stirng

console.log(name);  //ho aggiunto questa stampa per vedere anche il primo nome

name ='Carlo'; //string

console.log(name);