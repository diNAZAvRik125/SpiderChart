export const required = (value) => value ? undefined : 'Обязательное поле'

export const requiredArray = (value) => value && Array.isArray(value) && value.length !== 0 ? undefined : 'Обязательное поле'

export const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Неверный email адресс' : undefined

export const maxLength = (max) => (value) =>
    value && value.length > max ? `Должно быть небольше ${max} символов` : undefined

export const maxLength15 = maxLength(15);

const minValue = (min) => (value) =>
    value && value.length < min ? `Должно быть длиннее ${min} символов` : undefined

export const minLength8 = minValue(8);

export const phone = (value) =>
    value && !/^[0-9\b] + $/ ?
        'Неверный номер телефона' : undefined
