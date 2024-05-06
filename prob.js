/* let arr1 = [ 2, 5, 1, 3, 3]
let arr2 = [ 4, 9, 9, 1, 3]

function calc(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let obj1 = {}
    let obj2 = {}
    for (const val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (const val2 of arr2) {
        obj2[val2] = (obj2[val2] || 0) + 1
    }
    console.log(obj1)
    console.log(obj2)
    for (const key in obj1) {
        if (key ** 2 in obj2) {
            if (obj1[key] === obj2[key ** 2]) {
                continue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(calc(arr1, arr2)) */



let arr = [2, 7, 2, 11, 3]
let target = 13


let max = -Infinity
console.log(max)
// console.log(twoSum(arr, target))