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
            default :
                return states
        }
}

export default userReducer;