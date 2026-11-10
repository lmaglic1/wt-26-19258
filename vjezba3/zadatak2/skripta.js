// Aktivnost: vježbanje.
// n = ukupan broj ponavljanja, k = poslije koliko ponavljanja ide pauza.
//
// Odabrana mogućnost: ako posljednje ponavljanje pada na mjesto pauze,
// plan se završava odmah, bez završne pauze (nakon zadnjeg ponavljanja nema se šta nastaviti).

function generisiPlanVjezbanja(n, k) {
  const plan = [];
  for (let i = 1; i <= n; i++) {
    plan.push("Ponavljanje " + i);
    if (i % k === 0 && i < n) {
      plan.push("Pauza");
    }
  }
  return plan;
}

function procitajPozitivanCijeliBroj(poruka) {
  const unos = prompt(poruka);
  if (unos === null || unos.trim() === "") return null;
  const broj = Number(unos);
  if (!Number.isInteger(broj) || broj <= 0) return null;
  return broj;
}

const n = procitajPozitivanCijeliBroj("Unesite ukupan broj ponavljanja (n):");
const k = n === null ? null : procitajPozitivanCijeliBroj("Unesite poslije koliko ponavljanja ide pauza (k):");

if (n === null || k === null) {
  document.write("Neispravan unos: n i k moraju biti pozitivni cijeli brojevi.");
} else {
  const plan = generisiPlanVjezbanja(n, k);
  for (const red of plan) {
    document.write(red + "<br>");
  }
}
