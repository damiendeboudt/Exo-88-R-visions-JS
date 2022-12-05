let ButtonSend = document.getElementById("buttonSend");
let userText = document.getElementById("inputText");
let table = [];



ButtonSend.addEventListener("click", function () {
    table.push(userText.value);
    if (table.length > 9) {
        let random = table[Math.floor(Math.random() * table.length)];
       document.getElementById("aleat").innerHTML = "Une des Valeurs rentrées au hasard ---->" +  random;
    }
    if (table.length === 5) {
        document.getElementById("Valeur5").innerHTML += table[4];
    }
})

document.getElementById("randombutton").addEventListener("click", function () {
    document.getElementById("randomvalue").innerHTML = (table[Math.floor(Math.random() * table.length)]) +
        "<br>"
    })

document.getElementById("affichertableau").addEventListener("click", function () {
    document.getElementById("tableaufull").innerHTML = table.join()
})

document.getElementById("suppress").addEventListener("click", function () {
    table.pop()
    document.getElementById("tableaufull").innerHTML = table.join()
})

//document.getElementById("suppressall").addEventListener("click", function (){
  //  document.getElementById("tableaufull").innerHTML = table.
//})