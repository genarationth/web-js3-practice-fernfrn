var a = 10;
var b = 5;

let addNumber = (a,b) => {return a + b;}

let subtractNumber = (a,b) => {
    return a - b;
};

const multiplyNumber = (a,b) => {
    return a * b;
};

const divideNumber = (a,b) => {
    return a / b;
};

let fisrtName = 'Fern';
var location = 'Bkk';
var hobby = 'drawing';

console.log(addNumber(a,b));
console.log(subtractNumber(a,b));
console.log(divideNumber(a,b));
console.log(multiplyNumber(a,b));


//excercise2
const informFunction = (fisrtName,location,hobby) => {
    return `My name is ${fisrtName}, I live in ${location} and enjoy ${hobby}`
}

console.log(informFunction(fisrtName,location,hobby));
