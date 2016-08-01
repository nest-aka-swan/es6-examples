/**
 * Created by Lebedev on 01.08.2016.
 */

// Map

let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

// Set

let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert( set.size ); // 3

set.forEach( user => console.log(user.name ) ); // Вася, Петя, Даша

// WeakMap, WeakSet

let isMarked     = new WeakSet();
let attachedData = new WeakMap();

class Node {
    constructor (id)   { this.id = id;                  }
    mark        ()     { isMarked.add(this);            }
    unmark      ()     { isMarked.delete(this);         }
    marked      ()     { return isMarked.has(this);     }
    set data    (data) { attachedData.set(this, data);  }
    get data    ()     { return attachedData.get(this); }
}

let foo = new Node("foo");

// JSON.stringify(foo) === '{"id":"foo"}';
foo.mark();
foo.data = "bar";
// foo.data === "bar";
// JSON.stringify(foo) === '{"id":"foo"}';

// isMarked.has(foo)     === true
// attachedData.has(foo) === true
foo = null;  /* remove only reference to foo */
// attachedData.has(foo) === false
// isMarked.has(foo)     === false
