// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// }



const arrayToList = (array) => {
    list = { "value": array[array.length - 1], "rest": null}
    return list
}

list = arrayToList([1, 2, 3])
console.log(list)