console.log("hello");

let userAge = prompt("Scrivi qui la tua età")
let userDistance = prompt("Scrivi qui i kilometri da percorere")

console.log (Number(userAge), Number (userDistance));

console.log(userDistance * 0.21);

if (userAge < 18) {
    console.log((userDistance * 0.21) / (100) * (80));
} else if (userAge > 65){
    console.log((userDistance * 0.21) / (100) * (60));
}