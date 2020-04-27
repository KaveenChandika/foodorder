const initialState ={
    users: [],
    status:false,
    fname:"",
    address:"",
    email:"",
    nic:"",
    tel:"",
    username:""
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
            case 'EDIT_USERS':
                return{
                    fname:action.payload[0].fname,
                    address:action.payload[0].address,
                    email:action.payload[0].email,
                    nic:action.payload[0].nic,
                    tel:action.payload[0].tel,
                    username:action.payload[0].username
                }
            default :
                return state
        }
}

export default userReducer;