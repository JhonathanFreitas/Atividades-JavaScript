function soma() {
    let num1 = parseInt (document.getElementById("num1").value);
    let num2 = parseInt (document.getElementById("num2").value);
    let res = document.getElementById("res");
    res.innerHTML= "O Resultado é: "+(num1+num2);
}