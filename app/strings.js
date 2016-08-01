/**
 * Created by Lebedev on 01.08.2016.
 */

function f(strings, ...values) {
    console.log(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
    console.log(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
    console.log(JSON.stringify(values));      // [3,5,8]
}

let apples = 3;
let oranges = 5;

let str = f`Sum of ${apples} + ${oranges} =\n ${apples + oranges}!`;