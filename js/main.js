function openProduct(productName) {
  var i;
  var x = document.getElementsByClassName("product");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(productName).style.display = "block";  
}

function mDropbox() {
  var b = document.getElementById("Categories1");
  if (b.style.display === "block") {
    b.style.display = "none";
  } 
  else {
    b.style.display = "block"; 
  }
}