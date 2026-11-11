// Odabrana mogućnost: zbir se ponovo računa iz redova tabele nakon svake promjene.
// Obrazloženje: zbir se uvijek dobija iz onoga što je stvarno u tabeli,
// pa ne može doći do neslaganja između varijable i prikazanih redova
// (npr. ako se red doda ili promijeni na drugom mjestu u kodu).

const forma = document.getElementById("forma");
const tijelo = document.getElementById("stavke");
const greska = document.getElementById("greska");

function azurirajZbir() {
  let zbir = 0;
  for (const red of tijelo.rows) {
    zbir += Number(red.cells[1].textContent);
  }
  document.getElementById("zbir").textContent = zbir.toFixed(2);
  document.getElementById("broj-stavki").textContent = "Ukupno (" + tijelo.rows.length + " stavki)";
}

forma.addEventListener("submit", function (e) {
  e.preventDefault();

  const naziv = document.getElementById("naziv").value.trim();
  const unosIznosa = document.getElementById("iznos").value.trim();
  const iznos = Number(unosIznosa);

  if (naziv === "" || unosIznosa === "" || !Number.isFinite(iznos) || iznos < 0) {
    greska.textContent = "Neispravan unos: naziv ne smije biti prazan, a iznos mora biti nenegativan broj.";
    return;
  }

  greska.textContent = "";
  const red = tijelo.insertRow();
  red.insertCell().textContent = naziv;
  red.insertCell().textContent = iznos;
  azurirajZbir();
  forma.reset();
});

azurirajZbir();
