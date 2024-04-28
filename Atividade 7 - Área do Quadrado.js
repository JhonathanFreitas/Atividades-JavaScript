function calcular() {
    let lado = parseInt (document.getElementById("lado").value);
    let area = document.getElementById("area");
    let dobroarea = document.getElementById("dobroarea");
    area.innerHTML= "A área do quadrado é: "+ (lado*lado);
    dobroarea.innerHTML= "O Dobro da área é: "+ (lado*lado*2)
}