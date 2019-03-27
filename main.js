"use strict";

//HOMEWORK 1

let numbers = [];
let arrayLength = +prompt("Reqem daxil edin: ");

for(let i = 0; i < arrayLength; i++)
{
    let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
    numbers.push(n);

}

let maxNumber  = numbers[0];
let minNumber  = numbers[0];

for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] > max)
    {
        maxNumber = numbers[i];
    }

    if(numbers[i] < min)
    {
        minNumber = numbers[i];   
    }
}

console.log(maxNumber, minNumber);

//HOMEWORK 2

let numbers = [];
let arrayLength = +prompt("Reqem daxil edin: ");

for(let i = 0; i < arrayLength; i++)
{
    let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
    numbers.push(n);
}


//HOMEWORK 3
let numbers = [];
let arrayLength = +prompt("Reqem daxil edin: ");
let sumOfAll = 0;
let sumOfEvens = 0;

for(let i = 0; i < arrayLength; i++)
{
    let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
    numbers.push(n);

    sumOfAll += n;
    n % 2 == 0 ? sumOfEvens += n : null;
}

for(let i = 0; i < numbers.length; i++)
{
    sumOfAll += numbers[i];
    numbers[i] % 2 == 0 ? sumOfEvens += numbers[i] : null;
}

console.log(`Sum of all: ${sumOfAll}; Sum of evens: ${sumOfEvens}; Sum of odds: ${sumOfAll - sumOfEvens}`);


//HOMEWORK 4
let words = [];

for(let i = 0; i < 5; i++)
{
    let word = prompt(i+1 + "-ci sozu daxil edin: ");
    words.push(word);
}

let maxWord = words[0];
let minWord = words[0];

for (let w of words) 
{
    w.length > maxWord.length ? maxWord = w : null;
    w.length < minWord.length ? minWord = w : null;
}

console.log(maxWord, minWord);
