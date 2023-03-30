function Calc(a, b, op) {

    switch (op) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
    
    }
  
  }
  console.log(Calc(10, 5, '-'));