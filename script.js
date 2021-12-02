function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  if (principal <= 0) {
    alert("Enter a positive number.");
  }
  document.getElementById("result").innerHTML =
    "If you deposit " +
    "<b>" +
    principal +
    "</b>" +
    ",<br>at an interest rate of " +
    "<b>" +
    rate +
    "</b>" +
    "%<br>You will receive an amount of " +
    "<b>" +
    interest +
    "</b>" +
    ",<br>in the year " +
    "<b>" +
    year +
    "</b>" +
    "<br>";
  focus("principal");
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
