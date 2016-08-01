/**
 * Created by Lebedev on 29.07.2016.
 */
export const PI = Math.PI;

function square(num) {
    return num * num;
}

export function diag(x, y) {
    return Math.sqrt(square(x) + square(y));
}

// export {one, two};
// export {one as once, two as twice};