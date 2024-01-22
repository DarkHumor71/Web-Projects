const romanNumerals = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["", "M", "MM", "MMM"],
];
function convertToRoman(num) {
  let result = "";
  while (num > 0) {
    for (let i = 0; i < 4; i++) {
      const d = Math.floor(num % 10);
      num = Math.floor(num / 10);
      result = romanNumerals[i][d] + result;
    }
  }
  return result;
}
console.log(convertToRoman(12));

function intToRoman(num) {
  if (num <= 0 || num > 3999) {
    return "Invalid number. Please enter a number between 1 and 3999.";
  }

  let romanNumeral = "";

  for (let i = 0; i < 4; i++) {
    const digit = Math.floor(num % 10);
    num = Math.floor(num / 10);

    romanNumeral = romanNumerals[i][digit] + romanNumeral;
  }

  return romanNumeral;
}

console.log(intToRoman(354)); // CCCLIV
console.log(intToRoman(1998)); // MCMXCVIII
console.log(intToRoman(49)); // XLIX
