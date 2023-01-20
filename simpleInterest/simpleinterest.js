function SI(p, t) {
    let r = 6.8;

    let si = (p * r * t) / 1200;
    let amount = si + p;

    return { si, amount };
}

let p = 2000;
let t = 4;
let { si, amount } = SI(p, t);
console.log("Simple Interest is " + si);
console.log("Amount is " + amount);
