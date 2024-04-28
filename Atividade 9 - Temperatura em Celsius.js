function converter() {
    let tempFahrenheit = parseInt (document.getElementById("tempFahrenheit").value);
    let res = document.getElementById("res");
    res.innerHTML= "A temperatura em Celsius é: "+5 * ((tempFahrenheit - 32) / 9)+"°C";
}