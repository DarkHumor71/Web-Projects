window.onload = function () {
  const btn = document.getElementById("convert-btn");
  const input = document.getElementById("number");
  const output = document.getElementById("output");
  btn.addEventListener("click", function () {
    if (input.value) {
      output.innerHTML = intToRoman(input.value);
    } else {
      output.innerHTML = "Please enter a valid number";
    }
  });
};

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
  if (num > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else if (num < 0) {
    return "Please enter a number greater than or equal to 1";
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
