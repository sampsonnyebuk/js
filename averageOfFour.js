function averageOfFour(num1, num2, num3, num4) {
    let sum = num1 + num2 + num3 + num4;
    let halfFour = sum/4;
    return halfFour;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5
