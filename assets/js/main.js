console.log("hello");

let userAge = prompt("Scrivi qui la tua età")
let userDistance = prompt("Scrivi qui i kilometri da percorere")

console.log (Number(userAge), Number (userDistance));


let tripPrice = userDistance * 0.21;

if (userAge < 18) {
    tripPrice *= 0.8
} else if (userAge > 65){
    tripPrice *= 0.6
}else{
    tripPrice
}

tripPrice = tripPrice.toFixed(2);

alert (tripPrice);

console.log(tripPrice);