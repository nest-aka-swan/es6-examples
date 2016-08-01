/**
 * Created by Lebedev on 01.08.2016.
 */

Symbol("foo") !== Symbol("foo");
const foo = Symbol('foo');
const bar = Symbol();
typeof foo === "symbol";
let obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
JSON.stringify(obj); // {}
Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [ Symbol(foo), Symbol() ]