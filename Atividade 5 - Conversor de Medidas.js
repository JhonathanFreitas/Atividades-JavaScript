function converter() {
    let med1 = parseInt (document.getElementById("med1").value);
    let conversão = document.getElementById("conversão");
    conversão.innerHTML= "A medida em Centimetro é: "+(med1*100)+"cm";
}