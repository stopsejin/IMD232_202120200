console.log('안녕하세요?');

const two = 2;
console.log(two);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal);

const additionConst = two + four;
console.log(additionConst);
let addition = two + four;
console.log(additionConst);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

// additionConst = additionConst + two;
// console.log(additionConst);

addition = addition + two;
console.log('addition', addition);
addition += two;
console.log('adition', addition);

subtraction = subtraction - 2;
console.log('subtraction', subtraction);

subtraction += -1 * two;
console.log('subtraction', subtraction);

multiplication = multiplication + two;
console.log('multiplication', multiplication);

multiplication *= two;
console.log('square, 제곱', 8 ** 2);

division = division / two;
console.log('나누기', division);

let counter = 0;

counter += 1;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);

let remainder = counter % 8;
console.log('나머지', remainder);

counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = !boolean;
console.log(boolean);

const textTwo = '2';
console.log(two);
console.log(textTwo);
console.log('num + txt', two + textTwo);
console.log('num + num', two + two);
console.log('txt + txt', textTwo + textTwo);
console.log('solution', two + Number(textTwo));
