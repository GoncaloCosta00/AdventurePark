// --------------------------------------------IMAGEM 1----------------------------------------------------
var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs1(slideIndex1 += n); 
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("imagem1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex1-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}
// --------------------------------------------IMAGEM 2----------------------------------------------------
var slideIndex2 = 1;
showDivs2(slideIndex2);
function plusDivs2(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("imagem2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex2-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}
// --------------------------------------------IMAGEM 3----------------------------------------------------
var slideIndex3 = 1;
showDivs3(slideIndex3);
function plusDivs3(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("imagem3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex3-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}
// --------------------------------------------IMAGEM 4----------------------------------------------------
var slideIndex4 = 1;
showDivs4(slideIndex4);
function plusDivs4(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("imagem4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex4-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}
// --------------------------------------------IMAGEM 5----------------------------------------------------
var slideIndex5 = 1;
showDivs5(slideIndex5);
function plusDivs5(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("imagem5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex5-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}
// --------------------------------------------IMAGEM 6----------------------------------------------------
var slideIndex6 = 1;
showDivs6(slideIndex6);
function plusDivs6(n) { // n indica se a imagem vai ser a seguinte ou a anterior
  showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("imagem6");
  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // oculta a imagem que estava no ecrã
  }
  x[slideIndex6-1].style.display = "block";  // mostra no ecrã a nova imagem pretendida
}