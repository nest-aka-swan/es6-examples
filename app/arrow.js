/**
 * Created by Lebedev on 01.08.2016.
 */

// before
// variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});

// variant 2 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));

// now
this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v);
});