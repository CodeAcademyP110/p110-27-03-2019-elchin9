"use strict";

//HOMEWORK 3
// let numbers = [];
// let arrayLength = +prompt("Arrayin uzunlugunu daxil edin: ");
// let sumOfAll = 0;
// let sumOfEvens = 0;

// for(let i = 0; i < arrayLength; i++)
// {
//     let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//     numbers.push(n);

//     sumOfAll += n;
//     n % 2 == 0 ? sumOfEvens += n : null;
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     sumOfAll += numbers[i];
//     // if(numbers[i] % 2 == 0) sumOfEvens += numbers[i];
//     numbers[i] % 2 == 0 ? sumOfEvens += numbers[i] : null;
// }

// console.log(`Sum of all: ${sumOfAll}; Sum of evens: ${sumOfEvens}; Sum of odds: ${sumOfAll - sumOfEvens}`);


//HOMEWORK 4
// let words = [];

// for(let i = 0; i < 5; i++)
// {
//     let word = prompt(i+1 + "-ci sozu daxil edin: ");
//     words.push(word);
// }

// let maxWord = words[0];
// let minWord = words[0];

// for (let w of words) 
// {
//     w.length > maxWord.length ? maxWord = w : null;
//     w.length < minWord.length ? minWord = w : null;
// }

// console.log(maxWord, minWord);


// FUNCTION - Reusable code block

function FindPower(powerBase, power)
{
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= powerBase;
    }

    return result;
}

const GetPI = () => 3.14;

function SumNumbers() 
{
    let sum = 0;
    for (const n of arguments) 
    {
        if(+n)
            sum += n;
    }

    return sum;
}

// function DoMath(n1, n2, operator = "+")
// {
//     switch (operator) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//         case "%":
//             return n1 % n2;
//         default:
//             throw new Error("operation is not valid");
//     }
// }

// function DoMathInfinite()
// {
//     let operator = arguments[0];

//     let sum;

//     switch (operator) {
//         case "+":
//             sum = 0;
//             break;
//         case "-":
//             sum = arguments[1];
//             break;
//         case "*":
//             sum = 1;
//             break;
//         default:
//             break;
//     }

//     for (let i = 1; i < arguments.length; i++) {
//         switch (operator) {
//             case "+":
//                 sum += arguments[i];
//                 break;
//             case "-":
//                 sum -= arguments[i];
//                 break;
//             case "*":
//                 sum *= arguments[i];
//                 break;
//             default:
//                 break;
//         }
//     }

//     return sum;
// }

// console.log(DoMathInfinite("-", 25, 12, 13, 45, 54));

var points = [40, 100, 85, 92, 78, 67];
let grades = [];
// points.sort(
//     function(a, b)
//     {
//         return a - b;
//     }
// );

points.forEach(function(point){
    grades.push(GetGrade(point));
})
    
function GetGrade(point)
{
    if(point >= 91) return "A";
    if(point >= 81) return "B";
    if(point >= 71) return "C";
    if(point >= 61) return "D";
    if(point >= 51) return "E";
    return "F";
}


