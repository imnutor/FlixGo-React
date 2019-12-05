import * as ActionType from "./../contanst/actionType";

let initialState ={
    currentUser: {},
    currentCart: []
}

const userReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case ActionType.LOGIN_USER:
            state.currentUser = action.currentUser
            return {...state};
        
        case ActionType.ADD_TO_CART:
            state.currentCart = action.currentCart
            return {...state};

        default:
            return {...state};
    }
}

export default userReducer;