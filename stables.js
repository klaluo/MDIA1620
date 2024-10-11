let horseName = "Snowdog";  
console.log[horseName];
let horseAge = 5;
console.log[horseAge];
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
console.log("3 months stay at my stable is $" + (STABLES_MONTHLY_FEE * 3) + " With a 10% discount, you would save $" + (STABLES_MONTHLY_FEE * 3)*0.1);


// lesson-5 code 

if (horseName !== "Muffy") {
    console.log(`${horseName} has come to visit the stables`)
} else {
    console.log (horseName + "is lonely");
}

if (!isHorseInside){
    console.log(`${horseName}is outside`);
} else {
    console.log(`${horseName} is inside`)
}


// lesson 6 code
//horse = 
let word = "rainbow";
console.log(word.length);

let horseNames = [horseName, "Strawberry", "Tank"];
let horseAges = [horseAge, 5, 3];
let horseLocations = [isHorseInside, "inside", "outside"];
// console.log(horseNames[2]);
// console.log("welcome to my stables! There are " + horseNames.length + "horses staying here!")
// console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here! There names are ${horseNames}`)
//  console.log(horseAges[2]);
// console.log(horseLocation[2]);

// if(horseNames[0] === "Snowdog") {
//     console.log("Hi Snowdog")
// }

// console.log(horseAges[2] + horseAges[1]); //8

// if(horseNames.length < 5) {
//     console.log("These stables are unpopular");
// }

// Lab 6

console.log(`Welcome to my stables! I have ${horseNames.length} horses that live here. Their names are ${horseNames} and they are all very friendly. 
    They are ${horseLocations[1]}. There ages are ${horseAges}`)


