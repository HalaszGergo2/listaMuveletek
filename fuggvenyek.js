import { emberekLISTA } from "./adat.js";

function kiir(lista){
    //függvény - működik a hoisting - deklaráció a hatóköre tetejére mászik
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        console.log(element);
        console.log(lista[i])
    }
}
kiir(emberekLISTA);


const kiir2 = function(lista){
    // függvény kifejezés, változónak adjuk értékül a függvényt
    // nem működik a hoisting
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index])
        
    }
}
kiir2(emberekLISTA)

function kiir3(lista){
    console.log("forEach(csak listához használható)")
    /*
    lista.forEach((element,index) => {
        console.log(element, index)
    });
*/
    lista.forEach(function(ember, i) {
        console.log(ember, i)
    });
}
kiir3(emberekLISTA)

// 20 évnél idősebbek listája

function idosebb20(lista){
    const idosebb20LISTA = lista.filter(function(ember){
        return ember.kor > 20
    })

    console.log(idosebb20LISTA)
}
idosebb20(emberekLISTA)

function ferfiak(lista){
    const ferfiakLISTA = lista.filter(function(ember){
        return ember.nem && ember.kor > 20
    })
    console.log(ferfiakLISTA)
}
ferfiak(emberekLISTA)



// lista rendezése kor szerintf
function rendez(lista){
    console.log("****************RENDEZETT")
    lista.sort(function(e1, e2){
        console.log(e1.kor, e2.kor, e2.kor-e1.kor)
        return e2.kor-e1.kor
    })
    console.log(lista);
}
rendez(emberekLISTA)

// véletlen sorrend kialakítása - elemek összekeverése

function kever(lista){
    console.log("******************KEVERT")
    lista.sort(function(){
        return Math.random()-0.5;
    })
    console.log(lista);
}
kever(emberekLISTA)