"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diag = diag;
/**
 * Created by Lebedev on 29.07.2016.
 */
var PI = exports.PI = Math.PI;

function square(num) {
    return num * num;
}

function diag(x, y) {
    return Math.sqrt(square(x) + square(y));
}

// export {one, two};
// export {one as once, two as twice};

//# sourceMappingURL=lib-compiled.js.map