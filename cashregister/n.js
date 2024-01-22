function checkCashRegister(price, cash, cid) {
    const table = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    const totalD = cid.reduce((acc, curr) => acc + curr[1],0);
    let changeDue = cash - price;
    if (totalD < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (totalD === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        const name = cid[i][0];
        const avAmount = cid[i][1];
        const uV = table[name];
        const maxNumberOfUnits = Math.floor(avAmount / uV);
        const numberOfUnits = Math.min(maxNumberOfUnits, Math.floor(changeDue / uV));

        if (numberOfUnits > 0) {
            changeDue = Math.round((changeDue - numberOfUnits * uV) * 100) / 100;
            change.push([name, numberOfUnits * uV]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));
