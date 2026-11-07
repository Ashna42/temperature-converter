function temperature() {

    let from_temp = document.getElementById("from_temp");
    let to_temp = document.getElementById("to_temp");

    let from_temp_value = from_temp.value;
    let to_temp_value = to_temp.value;

    let temperature = document.getElementById("temperature");
    let temperature_value = Number(temperature.value);

    let resultant_temperature = document.getElementById("resultant_temperature");

    let celsius;

    if (from_temp_value == "celsius") {
        celsius = temperature_value;
    }
    else if (from_temp_value == "fahrenheit") {
        celsius = (temperature_value - 32) * 5/9;
    }
    else if (from_temp_value == "kelvin") {
        celsius = temperature_value - 273.15;
    }


    let result;

    if (to_temp_value == "celsius") {
        result = celsius;
    }
    else if (to_temp_value == "fahrenheit") {
        result = (celsius * 9/5) + 32;
    }
    else if (to_temp_value == "kelvin") {
        result = celsius + 273.15;
    }

    resultant_temperature.innerHTML = "Temperature: " + result.toFixed(2);
}