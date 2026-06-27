
export const cartReducerFun = (state, action) =>{
    switch(action.type){
        case 'Add':
            return state.cart.includes(action.payload) ? state :  { ...state , cart : [...state.cart, action.payload]}
            
        case 'Remove':
            const filtered = state.cart.filter(id => id !== action.payload)
            return {
                ...state,
                cart : filtered
            }
        default :
            return  state;
    }
}
