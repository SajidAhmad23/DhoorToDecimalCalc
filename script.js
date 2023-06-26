function convertToDhoor() {
  var laggi = parseFloat(document.getElementById("laggi-input-d").value);

  if (isNaN(laggi)) {
    document.getElementById("result-d").innerHTML = "Please enter a valid number for Laggi.";
    return;
  }

  var decimal = 1;
  var dhoor = (decimal * 968) / (5 * Math.pow(laggi, 2));

  document.getElementById("result-d").innerHTML = "Dhoor: " + dhoor.toFixed(2);
}

function convertToDecimal() {
  var dhoor = parseFloat(document.getElementById("dhoor-input").value);
  var laggi = parseFloat(document.getElementById("laggi-input-d2").value);

  if (isNaN(dhoor) || isNaN(laggi)) {
    document.getElementById("result-d2").innerHTML = "Please enter valid numbers.";
    return;
  }

  var decimal = (dhoor * 5 * Math.pow(laggi, 2)) / 968;

  document.getElementById("result-d2").innerHTML = "Decimal: " + decimal.toFixed(2);
}

function convertDecimalAndDhoor() {
  var laggi = parseFloat(document.getElementById("laggi-input-d3").value);
  var decimal = parseFloat(document.getElementById("decimal-input-d3").value);

  if (isNaN(laggi) || isNaN(decimal)) {
    document.getElementById("result-d3").innerHTML = "Please enter valid numbers.";
    return;
  }

  var dhoor = (decimal * 968) / (5 * Math.pow(laggi, 2));

  document.getElementById("result-d3").innerHTML = "Dhoor: " + dhoor.toFixed(2);
}

document.getElementById("year").textContent = new Date().getFullYear();
