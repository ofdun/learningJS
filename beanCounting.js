countBs = function (string) {
    let count = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == 'B')
        {
            count++;
        }
    }
    return count
}
// console.log(countBs("BbBBbbBB"))
countChar = function (string, symbol) {
    let count = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == symbol)
        {
            count++;
        }
    }
    return count
}

// console.log(countChar('BbBBbbBB', 'B'))
