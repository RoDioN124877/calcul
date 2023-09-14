let switchs = document.querySelector(".switch__in")
let body = document.querySelector("body")
let c_svet = document.querySelector(".c__search")

switchs.addEventListener("click",()=>{
    if(switchs.checked == true){
        body.classList.add("body__white")
        body.classList.remove("body__black")

        c_svet.classList.add("C__white")
        c_svet.classList.remove("C")
        c_svet.classList.add("button__calcul__white")
        c_svet.classList.remove("button__calcul")

        num.forEach(nummbers => {
            nummbers.classList.add("button__calcul__white")
            nummbers.classList.remove("button__calcul")
        })
        delet.classList.add("button__calcul__white")
        delet.classList.remove("button__calcul")

        primer.classList.add("primer__all__white")
        primer.classList.remove("primer__all")
        primer__2.classList.add("primer__all__white")
        primer__2.classList.remove("primer__all")
        primer__iter.classList.add("primer__all__white")
        primer__iter.classList.remove("primer__all")
        
    }
    else{
        body.classList.remove("body__white")
        body.classList.add("body__black")

        c_svet.classList.remove("C__white")
        c_svet.classList.add("C")
        c_svet.classList.remove("button__calcul__white")
        c_svet.classList.add("button__calcul")

        num.forEach(nummbers => {
            nummbers.classList.remove("button__calcul__white")
            nummbers.classList.add("button__calcul")
        })
        delet.classList.remove("button__calcul__white")
        delet.classList.add("button__calcul")

        primer.classList.remove("primer__all__white")
        primer.classList.add("primer__all")
        primer__2.classList.remove("primer__all__white")
        primer__2.classList.add("primer__all")
        primer__iter.classList.remove("primer__all__white")
        primer__iter.classList.add("primer__all")
    }
})
