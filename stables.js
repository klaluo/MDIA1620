
//------------------------- Setting up shop -------------------------//


let horses = [];
let visitorMessage = "Welcome to my stables, visitor!";
let latePaymentFee = 200;
let availableStalls = 8
console.log(visitorMessage);

//------------------------- First day -------------------------//


function Horse(name, nickname, favTreat, age, isInside, isSmelly, hobby){
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = 500;
    this.isInside = isInside;
    this.isSmelly = isSmelly;
    this.hobby = hobby;
    this.introduction = function(){
        return `This is ${this.name}. She loves to ${this.hobby} and is ${this.age} years old. She loves to eat ${this.favTreat}`
    }
    this.funFact = function(){
        return `Fun Fact! This horses' nickname is ${this.nickname}!`
    }
}

const snowy = new Horse ("Snowy", "SnowSnow", "blueberries", 13, true, false, "playing fetch");
const muffy = new Horse ("Muffy", "Murf", "toilet paper", 20, true, true, "smelling people's feet" );
const tank = new Horse  ("Tank", "Smelly", "tree branches", 3, false, true, "spinning in circles");
horses.push(snowy, muffy, tank);

let ellie = {
    name: "Ellie",
    nickname: "Barker",
    favTreat: "strawberries",
    age: 5,
    monthlyRent: 500,
    isInside: false,
    isSmelly: true,
    hobby: "chasing rats",
}
horses.push(ellie);

snowy.isHungry = true;
muffy.isHungry = false;
tank.isHungry = false;
ellie.isHungry = true;

console.log(horses)



// {
    //  {
    //     name: 'Snowy',
    //     nickname: 'SnowSnow',
    //     favTreat: 'blueberries',
    //     age: 13,
    //     monthlyRent: 500,
    //     isInside: true,
    //     isSmelly: false,
    //     hobby: 'playing fetch',
    //     introduction: [Function (anonymous)],
    //     funFact: [Function (anonymous)]
    //   },
    //    {
    //     name: 'Muffy',
    //     nickname: 'Murf',
    //     favTreat: 'toilet paper',
    //     age: 20,
    //     monthlyRent: 500,
    //     isInside: true,
    //     isSmelly: true,
    //     hobby: "smelling people's feet",
    //     introduction: [Function (anonymous)],
    //     funFact: [Function (anonymous)]
    //   },
    // {
    //     name: 'Tank',
    //     nickname: 'Smelly',
    //     favTreat: 'tree branches',
    //     age: 3,
    //     monthlyRent: 500,
    //     isInside: false,
    //     isSmelly: true,
    //     hobby: 'spinning in circles',
    //     introduction: [Function (anonymous)],
    //     funFact: [Function (anonymous)]
    //   },
    // {
    //     name: 'Ellie',
    //     nickname: 'Barker',
    //     favTreat: 'strawberries',
    //     age: 5,
    //     monthlyRent: 500,
    //     isInside: false,
    //     isSmelly: true,
    //     hobby: 'chasing rats',
    //     introduction: [Function (anonymous)],
    //     funFact: [Function (anonymous)]
    //   }

//---------------------- Growing business ----------------------//



availableStalls -= horses.length

    if (availableStalls < 2) {
        console.log("We need to build more stalls");
    } else {
        console.log(`We have ${availableStalls} available!`);
    }


function calculateLatePayment(monthlyRent, latePaymentFee) {
    let totalPayment = monthlyRent + latePaymentFee;
    console.log(`The total payment including late fee is: $${totalPayment}`);
}

calculateLatePayment(snowy.monthlyRent, latePaymentFee);



function findWhoLikesTreats(favTreat) {
    for (let i = 0; i < horses.length; i++) {
        let horse = horses[i];
        let horseName = horse["name"];
        let favorite = horse["favTreat"];
        
        if (favorite === favTreat) {
            return(`${horseName} loves ${favTreat}!`);
        } else {
            console.log(
                `${horseName} doesn't like ${favTreat}, only ${favorite}, keep checking!`
            );
        }
    }
}
console.log(findWhoLikesTreats("toilet paper"));


function getHorseNickname (horseName) {
    return horseName.nickname;
}

console.log(`My horses nickname is ${getHorseNickname(snowy)}`);




//------------------------- Day to day operations -------------------------//


function getHobby(horseName) {
    for (let i = 0; i < horses.length; i++) {
        let horse = horses[i];
        if (horse === horseName) {
            return(`My horse ${horse.name}'s hobby is ${horse.hobby}`);
        }
    }
}
console.log (getHobby(snowy));
console.log (getHobby(muffy));


function moveHorsesOutside() {
    for (let i = 0; i < horses.length; i++) {
        horses[i].isInside = false;
        console.log(`${horses[i].name} has been moved outside to spend time in the sun.`);
    }
    return (`All babes have been moved outside.`);
}
console.log(moveHorsesOutside());




function nightTime(horses, isDark) {
    if (horses.isInside && !isDark) {
        horses.isInside = false;
        console.log(`${horses.name} has been moved outside.`);
    } else {
        this.isInside = true;
        console.log(`${horses.name} has been moved inside`);
    }
};

console.log(nightTime(snowy, true));


function feedHorses(horses) {
    console.log(`It's time to eat!`);
    horses.forEach(function(horse) {
        if (horse.isInside === false) {
            horse.isInside = true;
            console.log(`${horse.name} was outside and now inside.`);
        } else {
            console.log(`${horse.name} is already inside and is ready for a treat!`);
        }
        console.log(`${horse.name} gets their favorite treat: ${horse.favTreat}.`);
    });
}

feedHorses(horses);


horses.forEach(function(horse) {
    horse.isInside = false; 
});

console.log("Moving babes inside for the night.");

horses.forEach(function(horse) {
    nightTime(horse, true); 
});

console.log("Goodnight, horses!");



            //       /\
            //      /--\       cute horse with a birthday hat 
            //     /----\
            //    --------
            //  /           \
            // |            |
            // |   9     9  |
            // |     ..     |
            //  -------------