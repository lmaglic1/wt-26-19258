const stavke = document.querySelectorAll("#lista li");
const sazetak = document.getElementById("sazetak");
const resetuj = document.getElementById("resetuj");

function azurirajSazetak() {
  const zavrsene = document.querySelectorAll("#lista li.zavrsena").length;
  sazetak.textContent = "Završeno: " + zavrsene + " od " + stavke.length;
}

function postaviStanje(stavka, zavrsena) {
  if (zavrsena) {
    stavka.classList.add("zavrsena");
    stavka.querySelector(".status").textContent = "završeno";
  } else {
    stavka.classList.remove("zavrsena");
    stavka.querySelector(".status").textContent = "nezavršeno";
  }
}

stavke.forEach(function (stavka) {
  stavka.querySelector(".promijeni").addEventListener("click", function () {
    postaviStanje(stavka, !stavka.classList.contains("zavrsena"));
    azurirajSazetak();
  });
});

resetuj.addEventListener("click", function () {
  stavke.forEach(function (stavka) {
    postaviStanje(stavka, false);
  });
  azurirajSazetak();
});

azurirajSazetak();
