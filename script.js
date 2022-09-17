/**
 * JS - Aula7: Tabuada 
 * @author Alexandre Henrique
 */
var valor = 7;

for (var i = 10; i < 101; i++){
 document.write("<p>Tabuada do " + i + "</p>");
 for(var j = 1; j < 11; j++){
    document.write(i + " x " + j + " = " + ( i * j) + "<br>");
 }
}