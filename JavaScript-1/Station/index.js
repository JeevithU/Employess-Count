
let num = document.getElementById("count-el")

 let saveEl = document.getElementById("save-el")

 let count = 0
function increment (){

    count += 1
    num.innerText = count
}

function save(){
   
    let entries = count + " - "

    saveEl.textContent += entries 
     
    num.textContent = 0
    count = 0
}
save()

