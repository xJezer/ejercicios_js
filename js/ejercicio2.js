const ramBer = Math.floor(Math.random() * 101); 

let variable = ("< 10", "< 50", "> 75")

condition = variable[Math.floor(Math.random() * 3)]

console.log("let's try your luck, your number needs to be" + variable[condition] + " to win");

if (ramBer < 10 && condition === 0) {
    console.log("You win! Your number is less than 10.");
}else if (ramBer < 50 && condition === 1) {
    console.log("You win! Your number is less than 50.");
}else if (ramBer > 75 && condition === 2) {
    console.log("You win! Your number is greater than 75.");
}else {
    console.log("You lose! Your number does not meet the condition.");
}
console.log("Your number was: " + ramBer);