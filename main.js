import { emberekLISTA } from "./adat.js";
import { rendez, szures, torol } from "./adatKezelo.js"
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
//  1. jelenítsük meg a listánkat táblázatban, majd a listát tudjuk névszerint rendezni, ha rákattintunk a táblázat fejlécére
// akkor rendezze be a táblázat sorait,
// tudjunk szűrni név alapján
// tudjunk új adatot hozzáadni a táblázathoz,
// tudjunk törölni egy sort
// függvények és eljárások:
// 1. htmlOsszeallit(lista) -> txt | összeállítja a html szerkezetet egy szöveg változóba
// 2. megjelenit(txt) megjelenítette az adott html elembe
// 3. rendez(lista) -> rendezettLista | a paraméterében kapott listát név szerint megrendezi, a függvény akkor fut le, 
// ha a táblázat fejlécére kattintunk!
// 4. adatHozzaadas(lista) -> kibovitettLista | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot,
// majd azt beleteszi a listába, a függvény akkor fut le, ha rákattintunk a Hozzáad gombra.
// 5. torol(lista, id) -> tLista | kitörli a listából az adott id-jű elemet.
// akkor fog lefutni, ha a sor melletti töröl gombra kattintunk. 
// szures(lista, keresoSzoveg) -> szurtLista | a keresőmezőbe beírt szöveget keresi a lista objektumainak kév mezőjében.
// mindez akkor fut le ha beírunk valamit a keresőmezőbe.
let irany=1 // 1 - növekvő rendezés, -1 csökkenő rendezés
init(emberekLISTA)
szuresEsemeny()

function init(lista){
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny()
    torolEsemeny()
}

function rendezEsemeny(){
    const nevELEM=$(".adatok table th").eq(0)
    nevELEM.on("click", function(){
        const rLISTA = rendez(emberekLISTA, irany)
        console.log(rLISTA)
        init(rLISTA)
        irany*=(-1)
})
}
function szuresEsemeny(){
const keresoELEM = $("#szuro")
keresoELEM.on("keyup",function(){
    let keresoSzoveg=keresoELEM.val()
    const szLISTA = szures(emberekLISTA, keresoSzoveg)
    init(szLISTA)
})
}
function torolEsemeny(){
    const torolGOMB = $(".torol")
    torolGOMB.on("click", function(event){
    let id = event.target.id
    const LISTA=torol(emberekLISTA, id)
    init(LISTA)
})
}

