function DojoWather() {
    alert('Loading wather report...');
}

function aceptarCookies(){
    var elemento = document.getElementById("cookie");
    elemento.remove();
}


function convertirTemperatura() {
    var temperaturaSeleccionada = document.getElementById("temperature").value;
    var temperaturas = document.getElementsByClassName("temperatura");

    for (var i = 0; i < temperaturas.length; i++) {
        var temperaturaActual = parseFloat(temperaturas[i].innerText);

        if (temperaturaSeleccionada === "Celcius") {
            temperaturas[i].innerText = convertirACelsius(temperaturaActual).toFixed(0) + "°";
        } else if (temperaturaSeleccionada === "Fahrenheit") {
            temperaturas[i].innerText = convertirAFahrenheit(temperaturaActual).toFixed(0) + "°";
        }
    }
}

function convertirAFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

function convertirACelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

