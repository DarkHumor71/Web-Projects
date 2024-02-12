window.onload = function () {
  document.getElementById("check-btn").addEventListener("click", function () {
    if (document.getElementById("text-input").value) {
      if (palindrome(document.getElementById("text-input").value)) {
        document.getElementById("result").innerHTML =
          document.getElementById("text-input").value + " is a palindrome";
      } else {
        document.getElementById("result").innerHTML =
          document.getElementById("text-input").value + " is not a palindrome";
      }
    } else {
      alert("Please input a value");
    }
  });
};

function palindrome(str) {
  let s = str.replace(/[^a-zA-Z0-9]/g, "");
  s = s.toLowerCase();
  s = s.trim();
  console.log(s);
  let s1 = s.split("").reverse().join("");
  console.log(s1);
  if (s1 == s) return true;
  else return false;
}

palindrome("1 eye for of 1 eye.");
