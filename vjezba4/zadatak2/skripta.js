const forma = document.getElementById("forma");
const greska = document.getElementById("greska");
const pregled = document.getElementById("pregled");
const pregledNaslov = document.getElementById("pregled-naslov");
const pregledTekst = document.getElementById("pregled-tekst");
const pregledKategorija = document.getElementById("pregled-kategorija");

forma.addEventListener("submit", function (e) {
  e.preventDefault();

  const naslov = document.getElementById("naslov").value.trim();
  const tekst = document.getElementById("tekst").value.trim();
  const kategorija = document.querySelector("input[name='kategorija']:checked").value;

  // provjera prije bilo kakve promjene pregleda
  if (naslov === "" || tekst === "") {
    greska.textContent = "Naslov i tekst obavijesti ne smiju biti prazni.";
    return;
  }

  greska.textContent = "";
  pregledNaslov.textContent = naslov;
  pregledTekst.textContent = tekst;
  pregledKategorija.textContent = kategorija;
  pregled.className = kategorija.toLowerCase();
});

forma.addEventListener("reset", function () {
  greska.textContent = "";
});
