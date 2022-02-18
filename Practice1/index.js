//hi i am abhishek
//1 challenge
let firstname=" Abhishek "
let lastname=" hirwani "
let fullname = firstname+lastname
console.log(fullname)
//window.alert(fullname)

// 2 challenge
//create a funtion that logs out "hi there, Linda!" when called
let name ="Linda"
let greeting ="Hi there "

function myfunction(){
    console.log(greeting+", "+name+"!")
}
myfunction()

// 3 challenge
 let myPoints =3
 //create two functions add3Points and removel1Point, and have them
 // add/remove points to/from the myPoints variable
 function add3Poinnts(){
     myPoints += 3
     
 }
 function removel1Point(){
     myPoints -= 1
     
 } 
 add3Poinnts()
 add3Poinnts()
 add3Poinnts()
 removel1Point()
 removel1Point()
 console.log(myPoints)

 // 4 challange 
 //try to predict what each of the lines will log our
 console.log("2"+2) //22
 console.log(11+2) //13
 console.log("2"+6) //26
 console.log("My points: "+2 + 5) //My points: 25
 console.log(2+2) //4
 console.log("12"+"2") //122

 // 5 challenge
 //when the user cick the purchasse button render out
 //"Something went wrong, please try again" in the paragraph 
 //that has the id="error".
 let errorEl = document.getElementById("error-el")
function showerror(){
    
    errorEl.textContent="Something went wrong, Please try again"
}