function calcular() {
    let valorhora = parseInt (document.getElementById("valorhora").value);
    let horasmes = parseInt (document.getElementById("horasmes").value);
    let res = document.getElementById("res");
    res.innerHTML= "O Resultado é: R$"+(valorhora*horasmes);
}