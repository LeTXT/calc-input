
    export const targetNumber = (e, set, ref) => {
        const value = parseInt(e.value);
        if (e.value === '' || ( !isNaN(value) && value >= 0 )) {
            set(value)
            e.blur()
    
            if(ref.value === '') {
                ref.focus()
            }
        } 
    }

export const blurIfSameNumber = (e, state) => {
    if(e.key === state) {
        e.target.blur()
    }
}

// export const targetNumber = (e, set, ref) => {
//     const value = parseInt(e.target.value);
//     if (e.target.value === '' || (!isNaN(value) && value >= 0)) {
//       set(value);
//       e.target.blur();
  
//       if (ref.value === '') {
//         ref.focus();
//       }
//     }
//   };
  