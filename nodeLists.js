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
    let list = { "value": array[array.length - 1], "rest": null };
    for (let i = array.length - 2; i >= 0; i--)
    {
        list = { "value": array[i], "rest": list };
    }
    return list
}

let lst = arrayToList([1, 2, 3])

const listToArray = (list) => {
    let array = [];
    for (let i = list; i; i = i.rest)
    {
        array.push(i.value);
    }
    return array;
}

function prepend(element, list)
{
    return { "value": element, "rest": list };
}

function nth(number_of_element, list)
{
    let counter = 0
    for (let i = list; i; i = i.rest)
    {
        if (counter == number_of_element) return i['value']
        counter++;
    }
}

function nth_recursive(number_of_element, list)
{
    if (list.rest == null && number_of_element > 0) return;    
    if (number_of_element == 0) return list["value"];
    return nth_recursive(number_of_element - 1, list.rest);
}

lst = prepend(9, lst, false);
let array = listToArray(lst);
let n_element = nth_recursive(0, lst)
console.log(n_element)