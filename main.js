function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "sub") {
    calculate = a - b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "div") {
    calculate = a / b;
  }

  var resultMsg = "Calculated result = " + calculate;
  document.querySelector("#result").innerHTML = resultMsg;
  <!--console.log(calculate);-->
}

function clearFields() {
  document.getElementById('value1').value = "";
  document.getElementById('value2').value = "";
  document.querySelector("#result").innerHTML = "";
  document.getElementById("value1").focus();
}
