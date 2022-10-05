var Calculator = {  
};

Calculator.add = function(num1, num2) { return num1 + num2}
Calculator.subtract = function(num1, num2) { return num1 - num2}
Calculator.multiply = function(num1, num2) { return num1 * num2}
Calculator.divide = function(num1, num2) { return !num2 ? false : num1 / num2}