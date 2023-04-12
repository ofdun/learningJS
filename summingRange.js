const range = (start, end, step = 1) => {
    array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
        return array;
    }
    else
    {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
        return array;
        }
}

const sum = (numbers) =>
{
    let result = 0;
    for (let number of numbers)
    {
        result += number
    }
    return result
}

console.log(sum(range(1,10)))