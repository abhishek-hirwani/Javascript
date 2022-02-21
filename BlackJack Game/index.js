let player = {
    name:"Abhishek",
    chips: 145
}

let cards = []
let sum = 0

let hasBlackjack= false
let isAlive=false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player")

playerEl.textContent=player.name+": $"+player.chips


function getRandomcard(){
    let randomNumber=  Math.floor(Math.random()*13)+1  //1-13
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11 
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard = getRandomcard()
    let secondCard= getRandomcard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }


    sumEl.textContent="Sum: "+sum
    if(sum<21){
        message="Do you want to draw any other new card"
        } 
    else if(sum === 21){

        message="Congrats....you have got BlackJack...!!"
        hasBlackjack=true
        }else {
            message="you'r out from the game..!"
            isAlive=false
    }

    messageEl.textContent=message 

}


function newCard(){
    if(isAlive===true && hasBlackjack===false){
     
    let card = getRandomcard()
    sum += card
    cards.push(card)
    renderGame()   
    }
}    
















//task 1
//  //check if the person old enough to enter the night club(21)
//  //log a suitable  msg to console in both cases
//  let age=21
//  //if less than 21 -> "you can enter the club!"
//  //else -> "Welcome!"

//  if(age<=20){
//     console.log("You not allow to enter the club..!")
//  }else{
//      console.log("Welcome...to club..! ")

//  }


//  //task2 
//  //check if the person is eligible for a birthday card from the King 
//  let yourage =100
//  //if the less than 100 -> "Not eligilbe"
//  //else if exactly 100 ->"Here is your card from the King...!"
//  //else -> "Not eligible, you have aready gotten one"

//  if(yourage<100)
//  {
//     console.log("You'r not eligible for the Brthday card")
//  }else if(yourage === 100){
//     console.log("Hi here is your card from the King...!!")
//  }else{
//     console.log("You'r not eligible you have already gotten one")
//  }



// //Boolean Practice
// console.log(4===3)    //false
// console.log(5>2)        //true
// console.log(12>12)      //false
// console.log(3<0)            //false
// console.log(3>=3)       //true
// console.log(11<=11)     //true
// console.log(3<=2)       //false


//Arrays ordered lists of items

// let experienece =["I a have experiece of Html css and java ",
//             "I have completed my education BE",
//             "my skills are HTML css Java"

// ]
// console.log(experienece[1])
// console.log(experienece[2])
// console.log(experienece[0])
// console.log(experienece.length)


// let cardss=[8,9]
// cardss.push(10)
// console.log(cardss)

// cardss.pop(8)
// console.log(cardss)

//for loop
// for(let count =1;count<11;count+=2)
// {console.log(count)}

//create a for loop that counts from 10 to 100 in steps of 10
//use console.log to log out the numbers
// let arr=[7,8,9]
// for(let i=0;i<=arr.length;i+=1){
//     console.log(i)
// }


//for loop for priting the array

// let intro=["Hello","my","is","Abhishek"]
// let greetingEl=document.getElementById("greeting-el")
// for(let i=0;i<intro.length;i++){
//     greetingEl.textContent +=intro[i] +" "
// }

//Returning values in funtion
// let playertime1 =99
// let playertime2=103

// function getfastraceTime(){

//     if(playertime1<playertime2){

//     return playertime1

//     }else if(playertime2<playertime1){
//         return playertime2
//     }else{
//         return playertime1
//     }

// }

// let fastone = getfastraceTime()
// console.log(fastone)

// function totalRaceTime(){
//     return totaltime=playertime1+playertime2
// }
// let totalTimetken=totalRaceTime()
// console.log(totalTimetken)

//generating random numbers with Math.random()

// let randomNo= Math.random()     //0.00000-0.999999
// console.log(randomNo)

// get random for dice
// function rollDice(){
//     let randomNumber =Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// }
// console.log(rollDice)


// //And Operation logics
// let hascompletedCourse=true
// let givesCertificate=true

// if(hascompletedCourse===true && givesCertificate===true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generate Certificate.....")
// }

// let hasSolvedChallenge=false
// let hintsLeft=false
// if(hasSolvedChallenge===false && hintsLeft ===false){
//     showSolution()
// }
// function showSolution(){
//     console.log("Showing the Solutions")
// }

// //use Or Operator

// let likesdocumentrie=true
// let likesstartup = false

// if(likesdocumentrie===true||likesstartup===true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, checkut this new Film we think you will like")
// }

 //Intro to Objects
// let Course={

//     title: "learn HTML and CSS",
//     lesson:25,
//     creator: "per",
//     length: "25hr",
//     isFree:true,
//     tags:["h1","color"]

// }

// console.log(Course.lesson)