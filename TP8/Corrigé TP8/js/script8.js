/* script8.js */
var div = document.getElementById("div1");
var divs = document.getElementsByTagName("div");
var alpha = document.getElementsByName("alpha");
var one = document.getElementsByClassName("one");

window.console.log(div);
window.console.log(divs);
window.console.log(alpha);
window.console.log(one);

/* solution de l'exercice 3 */
alpha[0].innerHTML = "<p>Je suis le nouveau paragraphe :)</p>";

var titre = document.createElement("H1");
titre.innerHTML = "Modification des DIVs";
titre.setAttribute("class", "titre1");
titre.style.color = "blue";
var titre2 = titre.cloneNode();

document.body.insertBefore(titre, div);
document.body.removeChild(one[1]);
document.write("<p>dmkk mkmk </p>");
document.body.appendChild(titre2);