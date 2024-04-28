function converter() {
    let tempCelsius = parseInt (document.getElementById("tempCelsius").value);
    let res = document.getElementById("res");
    res.innerHTML= "A temperatura em Fahrenheit é: "+((tempCelsius * 9/5) + 32)+"°F";
}