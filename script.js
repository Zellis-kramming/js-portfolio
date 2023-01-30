/*function klickaknapp() {
  var tal1textbox = document.querySelector("#tal1");
  var tal2textbox = document.querySelector("#tal2");
  var tal1 = +tal1textbox.value;
  var tal2 = +tal2textbox.value;
  var svar = tal1 + tal2;

  //Skriv ut svaret i textrutan med id=svar
  var svarTextbox = document.querySelector("#svar");
  svarTextbox.value = svar;

  if (svar >= 10) {
    svarTextbox.style.backgroundColor = "green";
  } else {
    svarTextbox.style.backgroundColor = "red";
  }
}
*/

let coll = document.getElementsByClassName("expandable");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
}
