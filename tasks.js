const NUMBERS_TO_CALCULATE_QUANTITY = 2

const Calculator = class {
    constructor(...numbers) {
        if (numbers.length !== NUMBERS_TO_CALCULATE_QUANTITY || !numbers.every(Number.isFinite)) throw new Error(``);

        [this._x, this._y] = numbers

        this.setX = this.setX.bind(this)
        this.setY = this.setY.bind(this)
        this.logSum = this.logSum.bind(this)
        this.logMul = this.logMul.bind(this)
        this.logSub = this.logSub.bind(this)
        this.logDiv = this.logDiv.bind(this)
    }

    setX(number) {
        if (!Number.isFinite(number)) throw new Error(``)
        this._x = number
    }
    
    setY(number) {
        if (!Number.isFinite(number)) throw new Error(``)
        this._y = number
    }

    logSum() {
        console.log(this._x + this._y)
    }

    logMul() {
        console.log(this._x * this._y)
    }

    logSub() {
        console.log(this._x - this._y)
    }

    logDiv() {
        if (!this._y) throw new Error(``)
        console.log(this._x / this._y)
    }
}


const concatStrings = (string, separator) => {
    if (typeof string !== `string`) return ``
    if (typeof separator !== `string`) separator = ``

    let result = string

    return function add(string) {
        if (typeof string !== `string`) return result

        result += (separator + string)
        return add
    }
}

// Всегда возвращает функцию, нуждается в явном приведении к строке:
const concatStrings2 = (string, separator) => {
    if (typeof separator !== `string`) separator = ``

    let result = typeof string !== `string` ? `` : string
    let isFilled = typeof string !== `string`
    
    const add = string => {
        if (typeof string !== `string`) isFilled = true
        if (!isFilled) result += (separator + string)

        return add
    }
    add.toString = () => result

    return add
}


module.exports = {
    Calculator,
    concatStrings,
    concatStrings2,
}
