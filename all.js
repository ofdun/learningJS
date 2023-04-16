function everything_loop(array, f) {
    flag = true;
    array.forEach(element => {
        if (!f(element)) flag = false;
    });
    return flag;
};

function everything_some(array, f) {
    return !array.some(element => !f(element))
};