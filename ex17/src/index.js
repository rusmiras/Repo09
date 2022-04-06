// Only change code below this line
function inverseWhile() {
    var fiveNumbers = "";
    i = 5;
    while (i >= 0) {
        if (i > 0) {
            fiveNumbers = fiveNumbers + i + ","; 
        } else {
            fiveNumbers += i;
        }
        i--;
    }
    return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
