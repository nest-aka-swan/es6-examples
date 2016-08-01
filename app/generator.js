/**
 * Created by Lebedev on 01.08.2016.
 */
function* range(from, to, step = 1) {
    while(from < to) {
        yield from;
        from += step;
    }
}

for(let num of range(0, 5)) {
    console.log(num);
}