function adder(num1) {
    return function(num2) {
        return num1 + num2;
    }
};

console.log(adder(8)(20));