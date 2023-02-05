export const handChangeSymbol = (e, set) => {
    if(e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === 'x' || e.target.value === 'X' || e.target.value === '/') {
        if(e.target.value === '*') {
            return set('x')
        } else {
            return set(e.target.value)
        }
    }
}