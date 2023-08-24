function sumArray(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    return sum
}

const arr = [1, 2, 3, 4, 5]
console.log(sumArray(arr))
