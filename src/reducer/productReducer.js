const initialState = {
    products: [],
    editproducts:[],
    _id:"",
    p_id:"",
    p_name:"",
    p_price:"",
    qty:""
}

const ProductReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'FETCH_PRODUCT':
            return {
                products:action.payload
            }
        case 'ADD_PRODUCT':
            return {
                products:state.products.concat([action.product])
            }
        case 'DELETE_PRODUCT':
                return {
                    products:state.products.filter((p) => p.id !== action.id)
                }
        case 'EDIT_PRODUCT':
            return {
                _id:action.payload.data._id,
                p_id:action.payload.data.p_id,
                p_name:action.payload.data.p_name,
                p_price:action.payload.data.p_price,
                qty:action.payload.data.qty
            }
        case 'UPDATE_PRODUCT':
            var products = state.products.map((p) =>{
                if(p.id == action.product.id){
                    return{
                        ...p,
                        name:action.product.name,
                        price:action.product.price
                    }
                }else{
                    return p;
                }
                
            });
            return {
                products:products
            }
        default:
            return state;
    }
}

export default ProductReducer;

// {
//     _id:action.payload.data._id,
//     p_id:action.payload.data.p_id,
//     p_name:action.payload.data.p_name,
//     price:action.payload.data.price
// }