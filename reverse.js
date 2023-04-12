function reverseArray(array) {
    newarray = [];
    for (let item of array)
    {
        newarray.unshift(item);
    }
    return newarray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i <= Math.floor(array.length / 2); i++)
    {
        old = array[i]
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = old
    }
    return array
}

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))