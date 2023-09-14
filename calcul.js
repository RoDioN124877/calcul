let num = document.querySelectorAll(".num");
let iter = document.querySelectorAll(".iter");
let C = document.querySelector(".C");
let delet = document.querySelector(".delet");
let res = document.querySelector(".res");


let primer = document.querySelector(".primer");
let primer__2 = document.querySelector(".primer__2");
let primer__iter = document.querySelector(".primer__iter");

let num_1_var = 0;
let num_2_var = 0;
let iter_var = 0;

let resvar = 0;

num.forEach(nummbers => {
    nummbers.addEventListener('click', () => {
        if (primer__iter.textContent != 0) {
            primer__2.textContent = primer__2.textContent + nummbers.textContent;

        }
        else {
            primer.textContent = primer.textContent + nummbers.textContent;

        }

    })

});
iter.forEach(itera => {
    itera.addEventListener('click', () => {

        if (primer__iter.textContent != 0) {
            return
        }
        else {
            primer__iter.textContent = itera.textContent;

        }



    })
});
delet.addEventListener('click', () => {
    if (primer__2.textContent != 0) {
        primer__2.textContent = primer__2.textContent.slice(0, -1)
    }
    else if(primer__iter.textContent != 0){
        primer__iter.textContent = primer__iter.textContent.slice(0, -1)

    }
    else{
            primer.textContent = primer.textContent.slice(0, -1)

    }


})
C.addEventListener('click', () => {
    primer.textContent = ""
    primer__2.textContent = ""
    primer__iter.textContent = ""


})
res.addEventListener('click', () => {

    if (primer__2.textContent != 0) {
        
        num_1_var =  Number(primer.textContent);
        num_2_var = Number(primer__2.textContent)
        iter_var =  primer__iter.textContent;
        
        switch (iter_var) {
            case '+':
                resvar = num_1_var + num_2_var;
                break;
            case '-':
                resvar = num_1_var - num_2_var;
                break;
            case '÷':
                resvar = num_1_var / num_2_var;
                break;
            case '×':
                resvar = num_1_var * num_2_var;
                
             
        }
        primer.textContent = ""
        primer__2.textContent = ""
        primer__iter.textContent = ""
        primer.textContent = resvar
    }
})
