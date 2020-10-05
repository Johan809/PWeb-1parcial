let logs = [],
  n1 = 0,
  n2 = 0,
  ope,
  result,
  data;

const resultInput = document.getElementById("result");
const tBody = document.getElementById("tBody");
const n1Input = document.getElementById("n1");
const n2Input = document.getElementById("n2");

data = localStorage.getItem("Logs");
if (data != null) {
  logs = JSON.parse(data);
  LogHistory();
}

const validate = () => {
  n1 = parseInt(n1Input.value);
  n2 = parseInt(n2Input.value);

  if (isNaN(n1)) alert("Por favor ingrese el 1er numero");
  else if (isNaN(n2)) alert("Por favor ingrese el 2do numero");
  else return true;

  return false;
};

const ClearAll = () => {
  var option = confirm("¿Esta seguro de eliminar todo el historial?");
  if (option) {
    tBody.innerHTML = "";
    logs = [];
    saveInfo();
  }
};

const Clean = () => {
  n1Input.value = "";
  n2Input.value = "";
  n1Input.focus();
};

function LogHistory() {
  tBody.innerHTML = "";
  for (x = 0; x < logs.length; x++) {
    log = logs[x];
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.setAttribute("colspan", "2");
    td.innerText = log;
    tr.appendChild(td);
    tBody.appendChild(tr);
  }
  saveInfo();
}

function Calculate(operator) {
  if (validate()) {
    switch (operator) {
      case 1:
        ope = " + ";
        result = n1 + n2;
        break;

      case 2:
        ope = " - ";
        result = n1 - n2;
        break;

      case 3:
        ope = " × ";
        result = n1 * n2;
        break;

      case 4:
        ope = " ÷ ";
        result = n1 / n2;
        break;
    }
    resultInput.value = result;
    var log = n1 + ope + n2 + " = " + result;
    logs.push(log);
    LogHistory();
    Clean();
  }
}

function saveInfo() {
  data = JSON.stringify(logs);
  localStorage.setItem("Logs", data);
}
