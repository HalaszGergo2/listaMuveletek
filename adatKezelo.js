export function rendez(lista, irany){
    lista.sort(function(e1,e2){
        let eredmeny = 1
        if(e1.nev < e2.nev){
            eredmeny = -1
        }
        // a sort minden lehetséges listaelem párt összehasonlít (nev)
        // ha a visszatérési értéke pozitív akkor nem cserél, ha negatív akkor cserél
        return eredmeny*irany;
    })
    return lista
}

export function szures(lista, keresoSzoveg){
    const szurtLISTA = lista.filter(function(ember){
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
})
    return szurtLISTA;
}

export function torol(lista, id){
    lista.splice(id, 1)
    return lista
}