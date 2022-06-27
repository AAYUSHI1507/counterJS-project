function increament() {
  //   var num = Number(document.getElementById("number").innerHTML);
  //   if (num <= 10) {
  //     document.getElementById("number").innerHTML = num + 1;
  //   }
  //   else{
  //     document.getElementById("number").innerHTML = "N.D"
  //   }
  var num = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = num + 1;
}

function decreament() {
  var num = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = num - 1;
}

function neutral() {
  document.getElementById("number").innerHTML = 0;
}
