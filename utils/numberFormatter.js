export const formatNumber = (dateNumber) => {
    if (!dateNumber) return '0,0';
    // let roundedNumber = Math.round(dateNumber * 100) / 100;
    // return dataNumber.toFixed(2)
    // return roundedNumber
    return dateNumber.toFixed(2).replace('.', ',') + ' ₽';
}