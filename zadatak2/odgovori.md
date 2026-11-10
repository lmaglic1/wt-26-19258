# Zadatak 2 – odgovori

## Hoće li width: 200px imati efekta?
- **Inline:** ne, širina (i visina) se ne primjenjuju na inline elemente, link ostaje onoliko širok koliko je tekst.
- **Block:** da, link postaje širok 200px (plus padding i border), bez obzira na dužinu teksta.

## Gdje se može kliknuti?
- **Inline:** preko teksta i preko paddinga/pozadine linka (cijela obojena površina je dio linka). Vertikalni padding se može preklapati s okolnim redovima jer ne povećava visinu reda.
- **Block:** preko teksta, paddinga i "praznog dijela" obojene površine do 200px; cijeli pravougaonik je klikabilan.

## Izbor: block
Meni se koristi klikom, pa je najbolje da cijela obojena površina bude klikabilna, a ne samo tekst. Block daje stavkama jednaku širinu, urednu okomitu listu i veću metu za klik (što je bitno i na telefonu).
