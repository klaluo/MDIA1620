let horseName = "Snowdog";  
console.log(horseName);
let horseAge = 5;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

// LESSON-4 code
console.log(typeof horseName)
console.log(typeof horseAge)
const STABLES_MONTHLY_FEE = 1000;
console.log(STABLES_MONTHLY_FEE);

console.log(STABLES_MONTHLY_FEE - 20);
console.log("my stable monthly fee is " + (STABLES_MONTHLY_FEE - 20));
console.log(`my horse's name is ${horseName} and he is ${horseAge}`)
console.log("hi" + " 2"); // type coercion 
console.log(2 - "2"); // type coercion
console.log("hi " + "there");
console.log(false + "NaN");

// assignment 
let horseNickname = "Icey";

console.log(`My beautiful horse's name is ${horseName} and their nickname is ${horseNickname}. `);
console.log("3 months stay at my stable is $" + (STABLES_MONTHLY_FEE * 3) + "With a 10% discount, you would save $" + (STABLES_MONTHLY_FEE * 3)*0.1);