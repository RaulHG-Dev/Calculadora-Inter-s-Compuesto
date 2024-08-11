/**
 * The `formatNumberCurrency` function formats a number as a currency in Mexican Peso (MXN) with a
 * specified number of decimal places.
 * @param [number=0] - The `number` parameter in the `formatNumberCurrency` function is the numerical
 * value that you want to format as a currency. If no value is provided for the `number` parameter, the
 * default value is set to 0.
 * @returns The `formatNumberCurrency` function is returning a formatted currency string based on the
 * input number. The currency format is set to Mexican Peso (MXN) with a minimum of 0 and a maximum of
 * 2 fraction digits.
 */
export const formatNumberCurrency = (number = 0) => {
    return Intl.NumberFormat('es-MX',{
        style:'currency',
        currency:'MXN',
        minimumFractionDigits:0,
        maximumFractionDigits:2
    }).format(number) ;
}

/**
 * The function `truncateToTwoDecimals` rounds a number to two decimal places by multiplying it by 100,
 * flooring the result, and then dividing by 100.
 * @param num - The `num` parameter in the `truncateToTwoDecimals` function represents the number that
 * you want to truncate to two decimal places.
 * @returns The function `truncateToTwoDecimals` is returning the input number `num` truncated to two
 * decimal places.
 */
export const truncateToTwoDecimals = (num) => {
    return Math.floor(num * 100) / 100;
}