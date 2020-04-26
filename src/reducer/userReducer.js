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
            case 'EDIT_USER':
                return{
                    
                }
            default :
                return state
        }
}

export default userReducer;