// class Animal {
//     constructor(color = 'yellow', energy = 100) {
//         this.color = color;
//         this.energy = energy;
//     }
//     isActive() {
//         if (this.energy > 0) {
//             this.energy -= 20;
//             console.log('Energy is decreasing, currently at:', this.energy)
//         } else if (this.energy == 0) {
//             this.sleep();
//         }
//     }
//     sleep() {
//         this.energy += 20;
//         console.log('Energy is increasing, currently at:', this.energy)
//     }
//     getColor() {
//         console.log(this.color)
//     }
// }

// class Cat extends Animal {
//     constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canClimbTrees = canClimbTrees;
//         this.canJumpHigh = canJumpHigh;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Bird extends Animal {
//     constructor(sound = 'chirp', canFly = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class HouseCat extends Cat {
//     constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
//         super(sound, canJumpHigh, canClimbTrees, color, energy);
//         this.houseCatSound = houseCatSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.houseCatSound);
//     }
// }

// class Tiger extends Cat {
//     constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
//         super(sound, canJumpHigh, canClimbTrees, color, energy);
//         this.tigerSound = tigerSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.tigerSound);
//     }
// }

// class Parrot extends Bird {
//     constructor(canTalk = false, sound, canFly, color, energy) {
//         super(sound, canFly, color, energy);
//         this.canTalk = canTalk;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         if (this.canTalk) {
//             console.log("I'm a talking parrot!");
//         }
//     }
// }

// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp

// polly.makeSound(); // I'm a talking parrot!
// polly.makeSound(true); // chirp, I'm a talking parrot!

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180

// var leo = new HouseCat();

// // leo, no purring please:
// leo.makeSound(false); // meow
// // leo, both purr and meow now:
// leo.makeSound(true); // purr, meow


// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = "Type into the input to make this text change"


//     var input = document.createElement('input')
//     input.setAttribute('type', 'text')


//     document.body.innerText = '';
//     document.body.appendChild(h1);
//     document.body.appendChild(input);
// }



// function handleClicks(){
//     switch(h1.innerText){
//         case arr[0]:{
//             h1.innerText = arr[1];
//             break;
//         }

//         case arr[1]:{
//             h1.innerText = arr[2];
//             break;
//         }

//         case arr[2]:{
//             h1.innerText = arr[3];
//             break;
//         }

//         default:{
//             h1.innerText = arr[0];
//         }
//     }
// }



// function fun(val) {
//     console.log(val)
// }

// function add(a, b, callback) {
//     let sum = a + b;
//     callback(sum);
// }

// add(2, 3, fun);


// function loadingData() {

//     return new Promise((resolve, reject) => {
//         console.log("Processing....");
//         setTimeout(() => {
//             console.log("1) Loading data...");
//             resolve();
//         }, 2000)
//     })


// }

// function collectingData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2) Collecting data...");
//             resolve();
//         }, 2000)
//     })

// }

// function approvingData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3) Approving data...");
//             reject("Error: Not fulfilled");
//         }, 1000)
//     })

// }

// function approved() {
//     console.log("4) Approved!");
// }



// // loadingData(function () {
// //     collectingData(function () {
// //         approvingData(function () {
// //             approved();
// //         });

// //     });

// // });

// loadingData().then(collectingData).then(approvingData).then(approved).catch((err) => {
//     console.log(err);
// })



// async function Ex() {
//     await loadingData();
//     await collectingData();
//     await approvingData();
//     await approved();
// }


// Ex().then(collectingData).catch((err) => {
//     console.log(err);
// })



// var inter = setInterval(() => {
//     let date = new Date().toLocaleDateString();
//     console.log(date);
// }, 1000);

// setTimeout(() => {
//     clearInterval(inter);
// }, 5000);



function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}


let user = new Person("John", 30);
user.greet();
console.log(user);