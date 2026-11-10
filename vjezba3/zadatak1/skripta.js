// Procjena služi pacijentu u čekaonici doma zdravlja:
// na osnovu procijenjenog vremena čekanja (u minutama) zna da li da ostane ili da se vrati kasnije.
//
// Pragovi: p1 = 15, p2 = 45 (p1 < p2)
// Kategorije:
//   0 <= vrijednost <= 15  -> "Prihvatljivo"   (granična vrijednost 15 pripada ovoj kategoriji)
//  15 <  vrijednost <= 45  -> "Za provjeru"    (granična vrijednost 45 pripada ovoj kategoriji)
//  45 <  vrijednost        -> "Neprihvatljivo"

const p1 = 15;
const p2 = 45;

function procijeniCekanjePacijenta(vrijednost, p1, p2) {
  if (vrijednost > p2) return "Neprihvatljivo";
  if (vrijednost > p1) return "Za provjeru";
  return "Prihvatljivo";
}

const unos = prompt("Unesite procijenjeno vrijeme čekanja u minutama:");

if (unos === null) {
  alert("Unos je otkazan.");
} else if (unos.trim() === "") {
  alert("Niste ništa unijeli.");
} else {
  const vrijednost = Number(unos);

  if (!Number.isFinite(vrijednost)) {
    alert("Unos mora biti broj.");
  } else if (vrijednost < 0) {
    alert("Vrijeme čekanja ne može biti negativno.");
  } else {
    alert(procijeniCekanjePacijenta(vrijednost, p1, p2));
  }
}
