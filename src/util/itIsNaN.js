export const itIsNaN = (state1, state2, symbol) => {
    if(state1 === '' || state2 === '') {
    return 
} else {
    if(symbol === '+') {
        return parseInt(state1)+parseInt(state2)
    } else if(symbol === '-') {
        return parseInt(state1)-parseInt(state2)
    } else if(symbol === 'x') {
        return parseInt(state1)*parseInt(state2)
    }
}
// return `${state1}`+`${state2}`
}

