import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProduct} from '../../actions/index';
class EditProduct extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        var data =({
            _id:e.target._id.value,
            p_id:e.target.id.value,
            p_name:e.target.name.value,
            p_price:e.target.price.value,
            qty:e.target.qty.value
        });

        this.props.updateProduct(data);
        window.location.href="/"
    }
    
    render(){
        return(
            <div>
                <h3>Edit Products</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        style={{width:200,padding:2}} 
                        className="form-control input-sm" 
                        name="id" 
                        placeholder="Id"
                        readOnly 
                        defaultValue={this.props.p_id}
                        />
                    <br/>
                    <input type="text" 
                        style={{width:200,padding:2}} 
                        className="form-control input-sm" 
                        name="name" 
                        placeholder="Name" 
                        defaultValue={this.props.p_name}
                         />
                    <br/>
                    <input type="text" 
                        style={{width:200,padding:2}} 
                        className="form-control input-sm"  
                        name="price" 
                        placeholder="Price" 
                        defaultValue={this.props.p_price}
                        />
                    <br/>
                    <input type="text" 
                        style={{width:200,padding:2}} 
                        className="form-control input-sm"  
                        name="qty" 
                        placeholder="Quantity" 
                        defaultValue={this.props.qty}
                        />
                    <br/> 
                    <input type="text" 
                        style={{width:200,padding:2}} 
                        className="form-control input-sm"  
                        name="_id" 
                        hidden
                        placeholder="_id" 
                        defaultValue={this.props._id}
                        />
                    <br/>                    
                    <input type="submit" style={{width:100,padding:2}} className="btn btn-info" value="Update" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state.productRed.editproducts)
    return{
        _id:state.productRed._id,
        p_id:state.productRed.p_id,
        p_name:state.productRed.p_name,
        p_price:state.productRed.p_price,
        qty:state.productRed.qty
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateProduct: (data) => dispatch(updateProduct(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(EditProduct);