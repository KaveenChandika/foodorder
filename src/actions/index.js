import axios from 'axios';
export const addProduct = (state) =>{
    // console.log(state);
    // axios.post("http://localhost:5001/api/addProduct",{data:state})
    // return {
    //     type:'ADD_PRODUCT',
    //     product:state
    // }
    console.log(state.name);
    return function (dispatch){
        axios.post("http://localhost:5001/api/addProduct",{data:state})
    }
}

export const deleteProduct = (id) =>{
    return function (dispatch){
        axios.post(`http://localhost:5001/api/deleteProduct/${id}`)
    }
}

export const editProduct = (id) =>{
    return function (dispatch){
        axios.get(`http://localhost:5001/api/getEditProduct/${id}`)
        .then((res)=>{
            dispatch({type:'EDIT_PRODUCT',payload:res})
        })
    }
}

export const updateProduct = (data) =>{
    return function (dispatch){
        axios.post("http://localhost:5001/api/updateProduct",{data:data})
    }
}

export const getProducts = () =>{
    return function (dispatch){
        axios.get('http://localhost:5001/api/products')
        .then((res) =>{
            dispatch({type:'FETCH_PRODUCT',payload:res.data})
        })
    }
}

