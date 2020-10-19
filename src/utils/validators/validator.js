// тут создаем валидаторы для форм

//  валидатор пустой строки
export const requared = (value) => {
    if (value) return undefined
    return 'Field is required'
}

// функция создающая валидатор проверки длинны строки (см. замыкания  и санки)
export const maxLenghtCreater = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return `Max lenght  is ${maxLenght} symbol`
    return undefined
}

