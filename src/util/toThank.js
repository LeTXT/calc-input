export const toThank = (itIsNaN, set, set2) => {
    if( itIsNaN === '') {
        set('toThankClass')
        return ''
    } else if(!isNaN(itIsNaN)){
        set2('calcClass calcOn')
        set('toThankClass on')
        return itIsNaN
    } else {
        set('toThankClass')
    }
}