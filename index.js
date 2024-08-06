var inputVal = document.getElementById("valInput");
var subVal = document.getElementById("subInput");
var his = document.getElementById("empty");

function getValue(val) {
  //   document.getElementById("input").value = val;
  if (inputVal.value == "0") {
    inputVal.value = val;
  } else {
    inputVal.value += val;
  }
}

function clearAll() {
  if (inputVal.value.length < 0) {
    inputVal.value = "";
    subVal.value = "";
  } else {
    inputVal.value = 0;
  }
}

function removeLastNum() {
  if (inputVal.value.length == 1) {
    // inputVal.value = inputVal.value.slice(0, -1);
    inputVal.value = "0";
  } else {
    inputVal.value = inputVal.value.slice(0, -1);
  }
}
function solve() {
  var equation = inputVal.value;
  var answer = eval(equation);

  inputVal.value = answer;
  subVal.value = equation + "=";
  // his.value = equation + "=";
  showHistory(equation, answer);
}

function showHistory(equ, ans) {
  his.innerHTML += `<div class="historyDiv">
                              <p>${equ}</p>
                              <p>${ans}</p>
                          </div>`;
}

function clearHistory() {
  his.innerHTML = "";
  subVal.value = "";
  inputVal.value = "0";
}

// function mobHistory() {
//   var hide = document.getElementById("part1");
//   // var show = document.getElementById("history-mob");
//   hide.style.display = "none";
//   // show.style.display = "block";
// }
