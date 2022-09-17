/**
 * JS - Aula7: Tabuada 
 * @author Alexandre Henrique
 */

for (var i = 1; i < 101; i++){
 document.write("<p>Tabuada do " + i + "</p>");
 for(var j = 1; j < 11; j++){
    document.write(i + " x " + j + " = " + ( i * j) + "<br>");
 }
}