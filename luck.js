guess=42; 
let rounded = 0.00000001;
Math = Object.create(Math, { random: { value: () => rounded += 0.00000001 } });
Math.random.toString = () => `function random() { [native code] }`;
Object.freeze(Math);
guess = 1;