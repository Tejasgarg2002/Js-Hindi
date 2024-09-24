// Primitive
// 7 Types : string,Number,Boolean,null,undefined,symbol,Bigint

const score=100
const scoreValue=100.3
const isLoggedIn = true
const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId)

const bigNumber=39284792374932749n

// Refrence (Non Primitive)

// Array,Objects,Functions

const Heros = ["Shaktiman","Nagraj","Doga"]
let myObj={
    name:"Tejas",
    age:21
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)


//###############################################################

// stack(Primitive) , heap(Non-Primitive)

let myName="Tejas"
let anotherName=myName
anotherName="garg"

console.log(myName)
console.log(anotherName)

let userOne={
    email:"tejasgarg.2002@gmail.com",
    upi:"tejas@ybl"
}
let userTwo=userOne

userTwo.email="tej@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


