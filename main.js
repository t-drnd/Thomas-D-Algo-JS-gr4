alert("je fonctionne bien")

var a=4
var b=4
var c=3
if(a == b) {console.log("c'est egale")}
if(c < b && a + b != 3) {console.log("ok")}  
else {console.log("rate")}





switch(a) {
    case b: 
    console.log("a=b")
    break
 case c:
    console.log("a=c") 
    break
 default: 
 console.log("default")
}





var a=20
for(let i=0; i < a; i++) {
    console.log("oklm")
}





var a=3
while(a<9) {
    a++
    if (a == 7){
    continue}
    if (a == 8){
    break}
console.log(a)
}





var a=100
for(let i=0; i < a; i++) {
    if (i % 15 == 0)
    console.log("Fizzbuzz")
    if (i % 3 == 0)
    console.log("Fizz")
    if (i % 5 == 0)
    console.log("Buzz")
}







var i=0
while(i <= 33) {
    i++ 
    if(i == 17) {i += 10}
    if(i == 28) {continue}
    if(i == 33) {console.log("reussi")
    break}
    console.log(i)
}








var a = "Jean"
var b = "Paul"
var result = checkName(a, b)

function checkName(prenom1, prenom2){
    if (prenom1 == prenom2) {
        return "Les deux prenoms sont identiques"
    } else {
        return "Les deux prenoms ne sont pas identiques"
    }
}

console.log(result)








var names = []
names.push("Vincent", "Paul", "Arthur")
names.forEach(function(name){
    name += " va a la peche"
    console.log(name)
})









let student = {
    names:"i",
    favoriteFood:"Pizza",
    city:"Paris"
}
let a = 0 
let b = Object.values(student)
b.forEach(i=>{
    a+=i.length
})
if((a%2)==0){
    console.log("pair")
} else{console.log("impair")}









let users = ["Stéphanie", "Gaïa" , "Etienne", "Michel", "Roberta", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(user => {
    if (countCharacter(user) > 5) {
        console.log("c est un prenom long de plus de 5 lettres.")
    } else {
        console.log("ce n est pas du tout un prenom long.")
    }
});
