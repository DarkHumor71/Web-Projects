window.onload = function () {
  const input = document.getElementById("user-input");
  const check = document.getElementById("check-btn");
  const clear = document.getElementById("clear-btn");
  const res = document.getElementById("results-div");
  check.addEventListener("click", function () {
    if (input.value) {
      console.log(input.value);
      if (telephoneCheck(input.value)) {
        res.innerHTML = "Valid US number: " + input.value;
      } else {
        res.innerHTML = "Invalid US number: " + input.value;
      }
    } else {
      alert("Please provide a phone number");
    }
  });
  clear.addEventListener("click", function () {
    res.innerHTML = "";
  });
};
function telephoneCheck(str) {
  const r = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-|\s]?)\d{4}$/;

  return r.test(str);
}

telephoneCheck("555-555-5555");
