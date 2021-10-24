const toddlerReducer = (state = {toddlers: []}, action) => {
    switch (action.type) {
        case 'LOADING_TODDLERS':
            return {
            ...state, 
            toddlers: [...state.toddlers], 
            loading: true
        }
        case 'ADD_TODDLER':
            return {
                ...state,
                toddlers: action.toddlers,
                loading: false
            }
            // return {...state, toddlers: [...state.toddlers, action.toddler]} 
        case "REMOVE_TODDLER":
            let deleteToddlers = state.toddlers.filter(toddler => toddler.id === action.payload.id)
            return {...state, toddlers: deleteToddlers}
        default:
            return state;
    }
}

export default toddlerReducer