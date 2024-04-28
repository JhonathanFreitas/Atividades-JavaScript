function calcular() {
    let raio = parseInt (document.getElementById("raio").value);
    let area = document.getElementById("area");
    const pi= 3.14;
    area.innerHTML= "A área do circulo é: "+ pi * (raio**2);
}