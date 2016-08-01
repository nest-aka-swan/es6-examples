/**
 * Created by Lebedev on 01.08.2016.
 */
function range(from, to) {
    return {
        from: from,
        to: to,

        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (this.current === undefined) {
                this.current = this.from;
            }

            if (this.current < this.to) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                delete this.current;
                return {
                    done: true
                };
            }
        }
    }
}

for(let num of range(0, 5)) {
    console.log(num);
}