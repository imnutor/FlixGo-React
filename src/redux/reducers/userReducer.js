import * as ActionType from "./../contanst/actionType";

let initialState ={
    currentUser: {}
}

const userReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case ActionType.LOGIN_USER:
            state.currentUser = action.currentUser
            return {...state};

        default:
            return {...state};
    }
}

export default userReducer;