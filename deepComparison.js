const deepEqual = (first, second) => {
    if (first === null || second === null) return false;
    if (!(typeof first == 'object' && typeof second == 'object')) return first === second;

    let keys_1 = Object.keys(first), keys_2 = Object.keys(second);

    if (keys_1.length != keys_2.length) return false;

    let flag = true;
    for (let key of keys_1)
    {
        if (!keys_2.includes(key) || !deepEqual(first[key], second[key])) return false;
    };
    return true;
}