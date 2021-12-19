const adminReducer = (state = {admins: [], isLoggedIn: false}, action) => {
    switch (action.type) {
        case 'LOADING_ADMINS':
            return {
            ...state, 
            admins: [...state.admins, action.payload], 
            loading: true
            }
        case 'LOGIN_ADMINS':
            console.log('ADDING ADMIN')
            return {
                ...state,
                isLoggedIn: true,
                admins: action.payload,
                loading: false
            }
        case "LOGOUT_ADMIN":
            let logOutAdmins = state.admins.filter(admin => admin.id === action.payload.id)
            return {...state, isLogged: true, admins: logOutAdmins}
        default:
            return state;
    }
}

export default adminReducer

// export default (
//     state = {
//       isLoggedIn: false,
//       id: null,
//       username: '',
//     },
//     action
//   ) => {
//     switch (action.type) {
//       case 'LOGIN_USER':
//         return {
//           isLoggedIn: true,
//           id: action.user.id,
//           username: action.user.username,
//         };
//       case 'LOGOUT_USER':
//         return {
//           isLoggedIn: false,
//           id: null,
//           username: '',
//         };
//       default:
//         return state;
//     }
//   };