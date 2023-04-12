function isEven(number) {
    if (number < 0) number = -number
    if (number % 10 != 0 && number % 10 != 1) return isEven(number - 2)
    return number % 10 ? true : false
}

console.log(isEven(75))