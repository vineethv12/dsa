// let str = "Hello"
// console.log(str.split("").reverse().join(""))
// console.log(typeof str)

// const sum = function (number) {
//     let total = 0
//     for (let i = 1; i <= number; i++) {
//         total += i
//     }
//     return total
// }

// console.log(sum(6))

// const logAtLeast = function (n) {
//     for (let i = 0; i <= Math.max(5, n); i++) {
//         console.log(i)
//     }
// }
// logAtLeast(7)

// function onlyElementsAtEvenIndex(array) {
//     var newArray = Array(Math.ceil(array.length / 2));
//     //creates empty array with 3 elements
//     for (var i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             newArray[i / 2] = array[i];
//         }
//     }
//     return newArray;
// }
// console.log(onlyElementsAtEvenIndex([1, 2, 3, 4, 5, "asd", "sss"]))

// function logUpTo(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// logUpTo([5, 2, 3])
/* 
// let arr = ['hertel', 'asd', 'asdsa', { first: { age: 23 } }]

// let data = {
//     first: {
//         name: 'hertel'
//     },
//     second: {
//         name: 'bot'
//     },
//     // third
// }

// console.log(data[first]) */

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

/* // let arr3 = { '1': 2, '2': 1, '3': 2, '5': 1 }
// let arr4 = { '1': 2, '4': 1, '9': 2, '125': 1 }

// let value = true

// for(const key in arr3){
//     if(arr3[key] !== arr4[key ** 2]){
//         value = false;
//         break;
//     }
// }

// console.log(value)

// for (const key in arr3) {
//     if (arr3[key] == arr4[key ** 2]) {
        
//     }
// } */


let str = "car";
let str2 = "rac"

const compare = function (str, str2) {
    if (str2.length !== str.length) {
        return false
    }
    let ob = {}

    for (const val of str) {
        ob[val] ? ob[val] += 1 : ob[val] = 1
    }
    for (const val1 of str2) {
        if (!ob[val1]) {
            return false
        } else {
            ob[val1] -= 1
        }
    }
    return true

}

console.log(compare(str, str2))
