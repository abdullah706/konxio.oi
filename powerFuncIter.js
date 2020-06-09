function powerFuncIter(num, power) {
    var result = 1;

    for (var i = 0; i  < power; i++) {
        result = result * num;
    }
    return result;
}
console.log(powerFuncIter(3, 3));

function powerFuncRec(num, power) {
    if (power == 0) {
        return 1;
    } else {
        return num * powerFuncRec(num, power - 1);
    }
}


console.log(powerFuncRec(3, 3));

console.log(powerFuncRec(5, 3));
console.log(powerFuncRec(5, 2));