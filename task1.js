const arr = [1, 5, 6, 0, 2, 'dfdd', null, 80, 13];

function countElements(arr) {
let zero = 0;
let even = 0;
let odd = 0;

arr.forEach(element => {
    if (typeof element === 'number') {
        if (element === 0) {
            zero++;
        } else if (element % 2 ===0) {
            even++;
        } else {
            odd++;
        }
    }
});
console.log(`нулей= ${zero},
            четный= ${even},
            нечет= ${odd}`);
}

countElements(arr);