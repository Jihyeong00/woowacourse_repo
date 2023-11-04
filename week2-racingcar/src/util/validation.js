import RACING from "../constants/message.js";

export const nameValidation = {
    lengthCheck: (names, length) => {
        names.forEach(name => {
            if (name.length > length || name.trim() === 0) throw new Error(RACING.NAMING_LENGTH_ERROR)
        })
    },
    duplicationCheck: (names) => {
        names.forEach(name => {
            if (names.filter(value => name === value).length >= 2) throw new Error(RACING.NAMING_DUPLICATION_ERROR)
        })
    }
}

export const numberValidation = {
    numberCheck: (number) => {
        if (Number.isNaN(number)) throw new Error(RACING.NUMBER_IS_NOT_NUMBER_ERROR)
    },
    integerCheck: (number) => {
        if (Number.isInteger(number)) throw new Error(RACING.NUMBER_IS_NOT_INTEGER_ERROR)
    },
    negativeCheck: (number) => {
        if (number <= 0) throw new Error(RACING.NUMBER_IS_NOT_POSITIVE_NUMBER)
    }
}

