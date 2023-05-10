const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convert");
const cleanButton = document.getElementById("clean");


function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}


function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}


function updateTemperatures() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(fahrenheit)) {
    celsiusInput.value = toCelsius(fahrenheit).toFixed(2);
  } else if (!isNaN(celsius)) {
    fahrenheitInput.value = toFahrenheit(celsius).toFixed(2);
  } else {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
  }
}


convertButton.addEventListener("click", updateTemperatures);


cleanButton.addEventListener("click", function () {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
});