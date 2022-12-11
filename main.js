var input = document.getElementById("input");
var output = document.getElementById("output");
input.oninput = function() {
  document.getElementById("output").value = (input.value*73.8).toFixed(4);
};

output.oninput = function() {
  document.getElementById("input").value = (output.value/73.8).toFixed(4);
};

