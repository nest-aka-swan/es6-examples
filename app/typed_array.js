/**
 * Created by Lebedev on 01.08.2016.
 */

/*
struct someStruct {
    unsigned long id;
    char username[16];
    float amountDue;
};
*/

let buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

let idView = new Uint32Array(buffer, 0, 1);
let usernameView = new Uint8Array(buffer, 4, 16);
let amountDueView = new Float32Array(buffer, 20, 1);

idView[0] = 4294967295 + 1; // 0

console.log(idView[0]);
console.log(idView.BYTES_PER_ELEMENT);