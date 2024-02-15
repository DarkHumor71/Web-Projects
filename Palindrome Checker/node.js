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
  let s1 = s.split("").reverse().join("");
  return s1 == s;
}
// function namer(str) {
//   let q = str;
//   for (let s = 0; s < q.length; s++) {
//     for (let e = q.length; e > s; e--) {
//       let a = q.slice(s, e);
//       if (palindrome(a) && a.length > 2) {
//         return q.slice(s, e);
//       }
//     }
//   }
// }

// console.log(namer("aceexcivicgrfdds"));
// console.log(namer("aceexcivicgrfdds"));
// console.log(namer("civicgrfdds"));
// console.log(namer("aceexcivic"));
// console.log(namer("civic"));
// console.log(namer("123abba1"));
// console.log(namer("abba1"));
// console.log(namer("123abba"));
// console.log(namer("12345"));
// console.log(namer(""));
