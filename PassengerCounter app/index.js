
let countEl=document.getElementById("count")
let count=0
function increment(){

    count += 1
    countEl.textContent=count 
}

let savEl=document.getElementById("save-el")

function save(){
    let countentries= count + " - "    
    savEl.textContent += countentries
     countEl.textContent=0
     count=0
}