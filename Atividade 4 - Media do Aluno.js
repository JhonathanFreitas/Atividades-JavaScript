function calcular() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /3

    alert(`A media dos valores é: ${media}`)

    console.log(`A media dos valores é: ${media}`)
}
