const power = (x, n) => {
    if (x <= 0 || n <= 0 || !Number.isInteger(x) || !Number.isInteger(n)) {
      return "числа должны быть натуральными";
    }
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  };
  
  power (3, 2);