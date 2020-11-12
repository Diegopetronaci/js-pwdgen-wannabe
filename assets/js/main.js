
//var name = prompt("come ti chiami?")
//document.getElementById("name").innerHTML = name

//var surname = prompt("scrivi il tuo cognome")
//document.getElementById("surname").innerHTML = surname

//var yob = parseInt(prompt("quanti anni hai?"))
//document.getElementById("yob").innerHTML = 2020 - yob

//var color = prompt("qual è il tuo colore preferito?")
//document.getElementById("color").innerHTML = color

//document.getElementById("password").innerHTML = name + surname + color + "19"

// alert("BENVENUTI IN QUESTA NOIOSISSIMA PAGINA!!")
//
// var name = prompt("come ti chiami?");
// document.getElementById("name").innerHTML = "Ciao " + name;
//
// var surname = prompt("scrivi il tuo cognome");
// document.getElementById("surname").innerHTML = surname + " è un Cognome fantastico!";
//
// var age = parseInt(prompt("quanti anni hai?"));
// var yob = 2020 - age ;
// document.getElementById("age").innerHTML = "Ah quindi sei nato nel "  + yob ;
//
// var color = prompt("qual è il tuo colore preferito?");
// document.getElementById("color").innerHTML = "Bello il " + color + " !";
//
// document.getElementById("password").innerHTML = "La Tua Password è: " + name + surname + color + "19";

//document.getElementById("password").innerHTML = "La Tua Password è: " + name + surname + color + age;

var name = prompt("come ti chiami? (mettete il nome vero per sorpresina)");
document.getElementById("name").innerHTML = "Ciao " + name;

var salutoProf = alert("Buongiorno " + name + ", grazie per il tempo che ci dedichi tutti i giorni e spero che questo Messaggio (creato per sperimentare) sia di tuo gradimento XD");

var surname = prompt("scrivi il tuo cognome");
document.getElementById("surname").innerHTML = surname + " è un Cognome fantastico!";

var age = parseInt(prompt("quanti anni hai?"));
var yob = 2020 - age ;
document.getElementById("age").innerHTML = "Ah quindi sei nato nel "  + yob ;

var color = prompt("qual è il tuo colore preferito?");
document.getElementById("color").innerHTML = "Bello il " + color + " !";

document.getElementById("password").innerHTML = "La Tua Password è: " + name + surname + color + "19";
