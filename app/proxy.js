/**
 * Created by Lebedev on 01.08.2016.
 */
let target = {};

let proxy = new Proxy(target, {
    get(target, property) {
        if(property in target)
            return target[property];
        return `There is no ${property}`;
    },

    set(target, property, value) {
        if(value === 42)
            console.log('Answer to the Ultimate Question of Life, the Universe, and Everything');
        target[property] = value;
        return true;
    },

    has(target, property) {
        // console.log('Cчастливой отладки!');
        return !(property in target);
    },

    deleteProperty(target, property) {
        return true;
    }
    // construct, get/setPrototypeOf, enumerate, etc.
});

console.log('\nset:');
proxy.foo = 42;

console.log('\nget:');
console.log(proxy.foo);
console.log(proxy.bar);

console.log('\nhas:');
console.log('foo' in proxy);

console.log('\ndeleteProperty:');
proxy.bar = 'baz';
delete proxy['bar'];
console.log(proxy.bar);

function sum(a, b) {
    return a + b;
}

let twice = new Proxy(sum, {
    apply(target, ctx, args) {
        return Reflect.apply(...arguments) * 2
    }
});

console.log(twice(2, 3));