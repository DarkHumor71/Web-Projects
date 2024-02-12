let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
window.onload = function () {
  const cash = document.getElementById("cash");
  const change = document.getElementById("change-due");
  const purchase = document.getElementById("purchase-btn");
  purchase.addEventListener("click", function (e) {
    if (cash.value >= price) {
      let amount = "";
      const ch = checkCashRegister(price, cash.value, cid);
      for (let a of ch.change) {
        amount += " " + a[0] + ": $" + a[1];
      }
      change.innerHTML = ch.status + amount;
    } else {
      alert("Customer does not have enough money to purchase the item");
    }
  });
};

function checkCashRegister(price, cash, cid) {
  if (price == cash) {
    return {
      status: "No change due - customer paid with exact cash",
      change: [],
    };
  }
  const table = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  const totalD = cid.reduce((acc, curr) => acc + curr[1], 0);
  let changeDue = cash - price;
  if (totalD < changeDue) {
    return { status: "Status: " + "INSUFFICIENT_FUNDS", change: [] };
  }

  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const name = cid[i][0];
    const avAmount = cid[i][1];
    const uV = table[name];
    const maxNumberOfUnits = Math.floor(avAmount / uV);
    const numberOfUnits = Math.min(
      maxNumberOfUnits,
      Math.floor(changeDue / uV)
    );

    if (numberOfUnits > 0) {
      changeDue = Math.round((changeDue - numberOfUnits * uV) * 100) / 100;
      change.push([name, numberOfUnits * uV]);
    }
  }

  if (changeDue > 0) {
    return { status: "Status: " + "INSUFFICIENT_FUNDS", change: [] };
  }
  if (change.reduce((acc, curr) => acc + curr[1], 0) == totalD) {
    return { status: "Status: " + "CLOSED", change: change };
  }
  return { status: "Status: " + "OPEN", change: change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
