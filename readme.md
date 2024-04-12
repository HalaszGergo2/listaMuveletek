# Listakezelő függvények gyakorlás

## Specifikáció

Jelenítsük meg a listánkat táblázatban, majd a listát tudjuk névszerint rendezni, ha rákattintunk a táblázat fejlécére
akkor rendezze be a táblázat sorait,
tudjunk szűrni név alapján
tudjunk új adatot hozzáadni a táblázathoz,
tudjunk törölni egy sort

## Metódusok

1. **htmlOsszeallit(lista) -> txt** | összeállítja a html szerkezetet egy szöveg változóba
2. **megjelenit(txt) megjelenítette az adott html elembe**
3. **rendez(lista) -> rendezettLista**| a paraméterében kapott listát név szerint megrendezi, a függvény akkor fut le, 
ha a táblázat fejlécére kattintunk!
4. **adatHozzaadas(lista) -> kibovitettLista** | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot,
majd azt beleteszi a listába, a függvény akkor fut le, ha rákattintunk a Hozzáad gombra.
5. **torol(lista, id) -> tLista** | kitörli a listából az adott id-jű elemet.
akkor fog lefutni, ha a sor melletti töröl gombra kattintunk. 
6. **szures(lista, keresoSzoveg) -> szurtLista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak kév mezőjében.
mindez akkor fut le ha beírunk valamit a keresőmezőbe.