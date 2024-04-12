export function htmlOsszeallit(lista){
    let txt = "<table class='table table-striped'>"
    txt += "<thead><tr><th>Név:</th><th>Kor:</th><th>Nem:</th><th></th></tr></thead>"
    txt += "<tbody>"
    lista.forEach((elem, index) => {
        txt += `<tr>`
        for (const kulcs in elem) {
            /*Objektumokat járhatunk be*/
             //console.log("kulcs", kulcs, elem[kulcs])
             txt += `<td>${elem[kulcs]}</td>`
        }
        txt +="<td>✏️</td>"
        txt +=`<td class='torol' id=${index}>🗑️</td>`
        
        txt += `</tr>`
    });
    txt += "</tbody></table>"
    return txt
}
export function megjelenit(txt){
    const divELEM = $(".adatok")
    divELEM.html(txt)
}