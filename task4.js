function printNumbers(num1, num2) {
    if (num1 > num2) {
      console.log('Поменяйте числа местами');
      return;
    }
  
    let i = num1;
  
    const intervalId = setInterval(() => {
      console.log(i);
  
      if (i === num2) {
        clearInterval(intervalId);
      }
  
      i++;
    }, 1000);
  };
  
  printNumbers(20, 5);