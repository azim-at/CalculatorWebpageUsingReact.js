import React from "react";

function Multiplication() {
  var n1 = document.getElementById("input-1").value;
  var n2 = document.getElementById("input-2").value;
  var n3 = Number(n1) * Number(n2);
  document.getElementById("answer").innerHTML = String(n3);
}

export default Multiplication;
