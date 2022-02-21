
let box= document.getElementById("click")

box.addEventListener("click", function(){
    console.log("i want to open the box")
})


let add= document.getElementById("container")
add.innerHTML= "<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML +="<p>Thank you for buying</p>"
}


//template Strings and literals
const recipient ="James"

//const email="Hey"+recipient+"! how is it going ? Cheers per "

const sender="Abhsihek"
const email=`Hey ${recipient}! how is it going ? Cheers ${sender} `

//console.log(email)

let welcomEl=document.getElementById("wel-el")

function greetUser(greet,name){ //parameters
    welcomEl.textContent = `${greet},  ${name}`
}
greetUser("welcome back"," Abhishek")
//what are the greet and name -> it is a paramter
//welcome back and abhishek is the argument
function addition(num1,num2){ //arguments
    return  num1+num2
}

console.log(addition(3,4))
console.log(addition(9,102))


function getFirst(arr){
return arr[0]
}

let firstCard= getFirst([10,2,3])
console.log(firstCard)