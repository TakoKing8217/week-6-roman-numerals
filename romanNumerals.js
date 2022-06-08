const toRoman = (number) => {
  let numerals = [];
  // Adding 1 "M" for each whole thousand to the numerals array then subtracting those thousands from number
  numerals.push("M".repeat(Math.floor(number / 1000)));
  number %= 1000;
  // If the remaining number is greater than 500, we add a "D" and subtract 500 from number
  numerals.push("D".repeat(Math.floor(number / 500)));
  number %= 500;
  // Adding 1 "C" for each remaining hundred to the numerals array then subtracting those hundreds from number
  numerals.push("C".repeat(Math.floor(number / 100)));
  number %= 100;
  // If the remaining number is greater than 500, we add a "D" and subtract 500 from number
  numerals.push("L".repeat(Math.floor(number / 50)));
  number %= 50;
  // Adding 1 "X" for each remaining ten to the numerals array then subtracting those tens from number
  numerals.push("X".repeat(Math.floor(number / 10)));
  number %= 10;
  // If the remaining number is greater than 5, we add a "V" and subtract 5 from number
  numerals.push("V".repeat(Math.floor(number / 5)));
  number %= 5;
  // Adding 1 "I" for each remaining hundred to the numerals array then subtracting those ones from number
  numerals.push("I".repeat(Math.floor(number / 1)));
  number %= 1;
  // Returning the numerals array as a readable uniform string
  return numerals.join("");
};

console.log(toRoman(5), "is expected to be V");
console.log(toRoman(267), "is expected to be CCLXVII");
console.log(toRoman(99), "is expected to be LXXXXVIIII");
console.log(toRoman(3743), " is expected to be MMMDCCXXXXIII");

// const toRoman = (number) => {
//   let numerals = [];
//   // Adding 1 "M" to numerals for each whole thousand to the numerals array then subtracting those thousands from number
//   numerals.push("M".repeat(Math.floor(number / 1000)));
//   number %= 1000;
//   // Adding "CM" to numerals if the hundreds number is equal to 900
//   numerals.push("CM".repeat(Math.floor(number / 900)));
//   number %= 900;
//   // If the remaining number is greater than 500, we add a "D" to numerals and subtract 500 from number
//   numerals.push("D".repeat(Math.floor(number / 500)));
//   number %= 500;
//   // Adding "CD" to numerals if the hundreds number is equal to 400
//   numerals.push("CD".repeat(Math.floor(number / 400)));
//   number %= 400;
//   // Adding 1 "C" to numerals for each remaining hundred to the numerals array then subtracting those hundreds from number
//   numerals.push("C".repeat(Math.floor(number / 100)));
//   number %= 100;
//   // Adding "XC" to numerals if the tens number is equal to 90
//   numerals.push("XC".repeat(Math.floor(number / 90)));
//   number %= 90;
//   // If the remaining number is greater than 500, we add an "L" to numerals and subtract 500 from number
//   numerals.push("L".repeat(Math.floor(number / 50)));
//   number %= 50;
//   // Adding 1 "X" to numerals for each remaining ten to the numerals array then subtracting those tens from number
//   numerals.push("X".repeat(Math.floor(number / 10)));
//   number %= 10;
//   // If the remaining number is greater than 5, we add a "V" to numerals and subtract 5 from number
//   numerals.push("V".repeat(Math.floor(number / 5)));
//   number %= 5;
//   // If the remaining number is 4, we add a "IV" to numerals and subtract 5 from number
//   numerals.push("IV".repeat(Math.floor(number / 5)));
//   number %= 4;
//   // Adding 1 "I" to numerals for each remaining hundred to the numerals array then subtracting those ones from number
//   numerals.push("I".repeat(Math.floor(number / 1)));
//   number %= 1;
//   // Returning the numerals array as a readable uniform string
//   return numerals.join("");
// };

// console.log(toRoman(5), "is expected to be V");
// console.log(toRoman(267), "is expected to be CCLXVII");
// console.log(toRoman(99), "is expected to be XCIX");
// console.log(toRoman(4444), "is expected to be MMMMCDXLIV");
// console.log(toRoman(9999), "is expected to be MMMMMMMMMCMXCIX");
// console.log(toRoman(3743), " is expected to be MMMDCCXLIII");

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(5), "is expected to be V");
console.log(romanize(267), "is expected to be CCLXVII");
console.log(romanize(99), "is expected to be XCIX");
console.log(romanize(4444), "is expected to be MMMMCDXLIV");
console.log(romanize(9999), "is expected to be MMMMMMMMMCMXCIX");
console.log(romanize(3743), " is expected to be MMMDCCXLIII");
