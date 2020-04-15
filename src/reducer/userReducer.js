const initialState ={
    users: [],
    status:false
}

const userReducer = (state=initialState,action) => {
        switch(action.type){
            case 'ADD_USERS':
                return{
                    status:!state.status
                }
            case 'VIEW_USERS':
                return{
                    users:action.payload
                }
            default :
                return state
        }
}

export default userReducer;