// Az űrlapról összegyűjtjük az adatokat, a submit gombra kattintva, beletesszük a listába.
import { init } from "./main.js"
export function ujAdat(lista){
    const nevELEM = $("#nev")
    const korELEM = $("#kor")
    const nemELEM = $("input[name='nem']:checked")
    const submitELEM = $("#submit")
    const adatOBJ = {
        nev:"",
        kor:0,
        nem:false
    }
    submitELEM.on("click", function(event){
       event.preventDefault();
       adatOBJ.nev = nevELEM.val()
       adatOBJ.kor = Number(korELEM.val())
       adatOBJ.nem = nemELEM.val()==="true" ? true : false
       console.log(adatOBJ)
       const validELEM = $(".valid-feedback")
       const nevVALIDE = validELEM.eq(0).css("display") !=="none"
       const korVALIDE = validELEM.eq(1).css("display") !=="none"
       console.log(nevVALIDE, korVALIDE)
       if (nevVALIDE && korVALIDE){
            lista.push(adatOBJ)
            init(lista)
       }else{
            console.log("Hibás adatok")
       }
       
    })
}