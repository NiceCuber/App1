console.log('Beans');
console.log(null);
console.log('NYC');
console.log(true);
console.log('Muscle Milk');
console.log(false);
console.log(407);
console.log(3 + 1);
console.log(37 * 57);
console.log(10000 / 100);
console.log(5000 - 20000);
console.log('Hello'.length);
console.log('Kathy'.toUpperCase);
console.log('Kathy'.startsWith('K'));
console.log(Math.random());
console.log(Math.random() * 5000);
console.log(Number.isInteger(2018));
/*This isn't really an app, per se. But I just finished
 my Codecademy lessons of vanilla JavaScript and can finally, 
 albeit imperfectly, solve the most basic programming problems.
 This is just test to see where I stand.*/
 //I'm really pushing the boundaries of what I know here.
const myName = 'Quinn';
console.log(myName);
const myAge = 24;
console.log(myAge);
let meal = 'Rice and beans';
console.log(meal);
meal = 'Peanut butter sandwiches';
console.log(meal);
let whatIAm;
let x = 44;
x ++;
let myPet = 'Cats';
console.log('I have two' + myPet + '.');
console.log(`I own two + ${myPet}.`);
let name = 'Kathy';
let myFriend = 'Kennedy';
console.log(`I'm ${name}. My friend here is ${myFriend}.`);
let needsCoffee = true;
if (needsCoffee === true) {
    console.log('No coffe today');
} else {
    console.log('Hava all the coffee you want');
}
let oneVariable = 'I exist';
if (oneVariable === true) {
    return 1000;
} else {
    return 100000;
}
let numberOfApples = 0;
if (numberOfApples) {
    console.log('Time to eat');
} else {
    console.log('We need to get some more food');

}
let isRaining = true;
if (isRaining) {
    console.log('Take shelter now');
} else {
    console.log('Have fun outside');

}
let hulkRage = 1000;
if (hulkRage < 1000) {
    console.log('Puny human');
} else {
    console.log('Hulk smash!');

}
let succubusLust = 100;
if (succubusLust > 150) {
    console.log('Someone is in big trouble!');
} else {
    console.log('That was too close. What were you thinking?!');

}
let powerLevel = 9000;
if (powerLevel >= 9000) {
    console.log('It is over 9000!');
} else {
    console.log('Ha! What a weakling!');

}
let numberOfGirlFriends = 2;
if (numberOfGirlFriends <= 2) {
    console.log('One is love! Two is Lust!');
} else {
    console.log('More is a harem! Stop watching so much anime!');

}
let disasterMovie = 'Day After Tomorrow';
if (disasterMovie == 'Day After Tomorrow') {
    console.log('Check out 2012.');
} else {
    console.log('You found your movie');

}
let stopLight = 'green';
if (stopLight === 'red' && pedestrians === true) {
    console.log('Stop!');
} else if (stopLight === 'yellow' || pedestrians === true) {
    console.log('Slow down.');
} else if (stopLight === 'green' && pedestrians === true) {
    console.log('Go when safe.');
} else {
    console.log('Be careful. Drive at your own risk.');

    let loveAtFirstSight = true;
    if (loveAtFirstSight === true || loveAtFirstSight === false) {
        console.log("It must be love!");
    } else {
        console.log("It can only be lust!");
    }
    let groceryItem = 'pumpkin cheesecake';
    switch (groceryItem) {
        case 'pumpkin pie':
            console.log('I may as well get the pumpkin pie.');
            break;
        default:
            console.log('Or I can get New York Cheesecake with graham cracker crust.');
    }
    let isNightTime = true;
    if (isNightTime) {
        console.log('Turn on the lights!');
    } else {
        console.log('Turn off the lights!');
    }
    isNightTime ? console.log('Turn on the lights!') :
        console.log('Turn off the lights!');
    let calculatorIsOn = false;
    const pressPowerButton = () => {
        if (calculatorIsOn) {
            console.log('Calulator turning off.');
            calculatorIsOn = false;
        } else {
            console.log('Calculator turning on.');
            calculatorIsOn = true;
        }
    };
    pressPowerButton();
    const multiplyByThirteen = (inputNumber) => {
        console.log(inputNumber * 13);
    };
    multiplyByThirteen(100000);
    const getAverage = (numberOne, numberTwo) => {
        const average = (numberOne + numberTwo) / 2;
        console.log(average);
    };
    getAverage(1000, 2000);
    const getAverage = (numberThree, numberFour) => {
        const average = (numberThree + numberFour) / 2;
        return average;
    }
    console.log(getAverage(500, 600));
    const multiplyByNineFifths = (celsius) => {
        return celsius * (9 / 5);
        const getFahrenheit = (celsius) => {
            return multiplyByNineFifths(celsius) + 32;
        };
        console.log('The temperature is' + getFahrenheit(32) + 'degrees Fahrenheit.');
    };
    function square(number) {
        return number * number;
    };
    console.log(square(127));
    const square = function (number) {
        return number * number;
    };
    console.log(square(1000));
    const multiplyByNineFifths = celsius =>
        celsius * (9 / 5);
    const getFahrenheit = celsius =>
        multiplyByNineFifths(celsius) + 32;
    console.log('The temperature is' + getFahrenheit(38) + 'degrees Fahrenheit.');
    const color = 'blue'
    const colorOfSky = () => {
        return color;
    };
    console.log(colorOfSky());
    const colorOfSky = () => {
        let color = 'gold';
        return color;
    };
    colorOfSky();
    const colorOfSky = () => {
        const dawn = true;
        if (dawn) {
            let color = 'midnight';
            return color;
        }
        return color;
    };
    const colorOfSky = () => {
        const dusk = true;
        let color = 'blue';
        if (dusk) {
            let color = 'magenta';
            return color;
        }
        return color;
    };
    const cloudCount = () => {
        let i = 200;
        console.log(i);
        for (let i = 0; i < 350; i++) {
            console.log(i);
        }
    };
    cloudCount();
    letNewYearsResolutions = ['Learn SQL', 'Learn C++', 'Learn Python', 'Learn x86 Assembly'];
    console.log(newYearsResolutions[0]);
    let square = 'Square Enix';
    console.log([0, 1]);
    let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
    seasons[3] = 'Autumn';
    console.log(seasons);
    const thisMonthsResolutions = ['Finish first app'];
    console.log(thisMonthsResolutions.length);
    const itemTracker = ['item 0', 'item 1', 'item 2'];
    itemTracker.push('item 3', 'item 4');
    console.log(itemTracker);
    const newItemTracker = ['item 5', 'item 6', 'item 7'];
    const removed = newItemTracker.pop();
    console.log(newItemTracker);
    console.log(removed);
    const flowers = ['daffodil', 'marigold', 'lily'];
    function addFlower(array) {
        array.push('cherry blossom');
    }
    addFlower(flowers);
    console.log(flowers);
    const nestedArray = [[1], [2, 3]];
    console.log(nestedArray[1]);
    let vacationSpots = ['Tokyo', 'Kyoto', 'Yokohama'];
    console.log(vacationSpots[0]);
    console.log(vacationSpots[1]);
    console.log(vacationSpots[2]);
    for (let counter = 0; counter < 12; counter++) {
        console.log(counter);
    };
    for (let counter2 = 12; counter2 > 13; counter2--) {
        console.log(counter2);
    };
    const animals = ['Gizzly bear', 'Sloth', 'Sea lion'];
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    };
    const myArray = [6, 19, 20];
    const yourArray = [19, 81, 2];
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < yourArray.length; j++) {
            if (myArray[i] === yourArray[j]) {
                console.log('Both loops share the same number:' + yourArray[j]);
            }
        }
    };
    for (let counter3 = 0; counter3 < 4; counter3++) {
        console.log(counter3);
    };
    let counter4 = 1;
    while (counter4 < 7) {
        console.log(counter4);
        counter4++;
    };
    let countString = '';
    let i = 0;
    do {
        countString = countString + i; i++;
    } while (i < 100000);
    console.log(countString);
    for (let i = 0; i++) {
        console.log('Banana');
        if (i > 79) {
            break;
        }
    };
    for (let i = 1; i < 2000; i++) {
        console.log(i);
    };
    const announceThatIAmDoingVeryImportantWork = () => {
        console.log("I'm doing very important work here, people.");
    };
    const busy = announceThatIAmDoingVeryImportantWork;
    busy();
    const functionRunTime = functionParameter => {
        let 1 = Date.now();
        functionParameter();
        let 2 = Date.now();
        return 2 - 1;
    };
    const addOneToOne = () => 1 + 1;
    functionRunTime(addOneToOne);
    fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));

    let groceries = ['Rice', 'Beans', 'Peanut butter', 'Bread'];
    groceries.forEach(groceryItem => console.log(groceryItem));
    const numbers = [1, 2, 3, 4, 5];
    const bigNumbers = numbers.map(number => {
        return number * 10;
    });
    console.log(numbers);
    console.log(bigNumbers);
    const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
    const shortWords = words.filter(words => {
        return words.length < 6;
    });
    console.log(words);
    console.log(shortWords);
    const jumbledNumbers = [123, 25, 78, 5, 9];
    const lessThanNinety = jumbledNumbers.findIndex(number => {
        return number < 90;
    });
    console.log(lessThanNinety);
    console.log(jumbledNumbers[3]);
    const numbers = [1, 2, 3, 4];
    const summedNumbers = numbers.reduce((accumulator, currentValue)) => {
        return accumulator + currentValue;
    };
    console.log(summedNumbers);
    let spaceship = {
        'Fuel Type': 'Anti-matter',
        color: 'Silver'
        planet: 'Earth'
        numberOfCrew: 5
        type: 'shuttle'
        mission: 'Explore the universe'
    };
    spaceship.getFahrenheit;
    spaceship.planet;
    spaceship.color;
    ['A', 'B', 'C'][0];
    spaceship['numberOfCrew'];
    spaceship['Fuel Type'];
    let returnAnyProp = (objectName, propName) =>
        objectName[propName];
    returnAnyProp(spaceship, numberOfCrew);
    spaceship.type;
    spaceship.speed = '0.5c';
    delete spaceship.mission;
    const alienShip = {
        invade: function () {
            console.log("We've come to conquer your world.");
        }
    };
    const blaaShip = {
        invade() {
            console.log("We'll conquer this planet.");
        }
    };
    alienShip.invade();
    blaaShip.invade();
    const darkNebula = {
        telescope: {
            yearBuilt: 4007,
            model: '91031-XLTY'
            focalLength: 2032
        },
        {leadership: 'Crew commanders'
    }, crew: {
            captain: {
                name: 'Sandra Ramirez',
                degree: 'Doctorate in Quantum Computer Engineering'
            },
            subcaptain: {
                name: 'Rodrick Gaynes',
                degree: 'Doctorate in Quantum Mechanics'
            },
            head technologist: {
                name: 'Chisa Nakazato',
                degree: 'Doctorate in Computer Science'
            },
        },
    } engine: {
        type: 'Tachyonic Warp Drive'
    },
        software: {
            Ammadeus Quantum Computer: {
                qubits: 2000
    },
    'back-up': {
        alternate power: 'Thorium reactor powered computer'
    }
};
spaceship.software['back-up'], alternatePower;
