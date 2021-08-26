// problem - 1

function seerToMon(seer) {
    if (seer < 0) {
        return "insert a positive integer number.";
    }
    else if (seer => 0) {
        var mon = seer / 40;
        return mon;
    }
}
const seerValue = 200;
const monValue = seerToMon(seerValue);
console.log(monValue);

/* ----------------
for testing purpose
------------------- */

// const seerValue1 = 120;
// const seerValue2 = -120;
// const result1 = seerToMon(seerValue1);
// const result2 = seerToMon(seerValue2);
// console.log(result1);
// console.log(result2);

// problem - 2

function totalSales(shirt, pant, shoe) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    if (shirt < 0 || pant < 0 || shoe < 0) {
        return "insert a positive integer number.";
    }
    else {
        const totalShirtPrice = shirt * perShirtPrice;
        const totalPantPrice = pant * perPantPrice;
        const totalShoePrice = shoe * perShoePrice;
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalPrice;
    }
}
const grandTotal = totalSales(1, 1, 1);
console.log(grandTotal);

/* ----------------
for testing purpose
------------------- */

// const result3 = totalSales(1, 0, 0);
// const result4 = totalSales(0, 1, 0);
// const result5 = totalSales(0, 0, 1);
// const result6 = totalSales(1, 1, 1);
// const result7 = totalSales(-1, 1, 1);

// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);

// problem - 3

function deliveryCost(items) {
    const perItemDeliveryCostUpto100 = 100;
    const perItemDeliveryCostUpto200 = 80;
    const perItemDeliveryCost200Plus = 50;
    if (items < 0) {
        return "insert a positive integer number.";
    }
    else if (items <= 100) {
        const count = items * perItemDeliveryCostUpto100;
        return count;
    }
    else if (items <= 200) {
        const first100ItemCost = perItemDeliveryCostUpto100 * 100;
        const remainingItems = items - 100;
        const remainingItemsCost = remainingItems * perItemDeliveryCostUpto200;
        const totalItemCost = first100ItemCost + remainingItemsCost;
        return totalItemCost;
    }
    else {
        const first100ItemCost = perItemDeliveryCostUpto100 * 100;
        const second100ItemCost = perItemDeliveryCostUpto200 * 100;
        const remainingItems = items - 200;
        const remainingItemsCost = remainingItems * 50;
        const totalItemCost = first100ItemCost + second100ItemCost + remainingItemsCost;
        return totalItemCost;
    }
}
const totalDeliveryCost = deliveryCost(201);
console.log(totalDeliveryCost);

/* ----------------
for testing purpose
------------------- */


// const result8 = deliveryCost(100);
// const result9 = deliveryCost(101);
// const result10 = deliveryCost(201);
// const result11 = deliveryCost(-1);

// console.log(result8);
// console.log(result9);
// console.log(result10);
// console.log(result11);


// problem - 4

let friendsName = ['Raju', 'Mina', 'Rakib', 'Mithun', 'Hasan'];
function perfectFriend(friendsName) {
    for (let i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length == 5) {
            return element;
            break;
        }
    }
    if (element.length !== 5) {
        return "no 5 string name found.";
    }
}
const fiveStringName = perfectFriend(friendsName);
console.log(fiveStringName);