import React, {Component} from 'react';
import {connect} from 'react-redux';
import productReducer from '../../reducer/productReducer';
import { useSelector ,useDispatch } from 'react-redux'; 
import {addProduct} from '../../actions/index';
import {bindActionCreators} from 'redux';

class AddProduct extends Component{
    
    // constructor(){
    //     super();
    //     this.state = {
    //         id:'',
    //         name:'',
    //         price:0
    //     }
    // }
    // handleInputChange = (e) =>{
    //     this.setState({
    //         [e.target.name] :e.target.value
    //     });
    // }

    handleSubmit = (e) =>{
        e.preventDefault();
        var data =({
            id:e.target.id.value,
            name:e.target.name.value,
            price:e.target.price.value,
            qty:e.target.qty.value
        });
        console.log(data);
        this.props.addProduct(data);
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" style={{width:200,padding:2}} className="form-control input-sm" name="id" placeholder="Id" value={this.props.id} />
                    <br/>
                    <input type="text" style={{width:200,padding:2}} className="form-control input-sm" name="name"  placeholder="Name" value={this.props.name} />
                    <br/>
                    <input type="text" style={{width:200,padding:2}} className="form-control input-sm"  name="price"  placeholder="Price" value={this.props.price} />
                    <br/> 
                    <input type="text" style={{width:200,padding:2}} className="form-control input-sm"  name="qty"  placeholder="Qantity" value={this.props.qty} />
                    <br/>                 
                    <input type="submit" style={{width:100,padding:2}} className="btn btn-info" value="Save" />
                </form>
            </div>
        )
    }
}

function mapStateToProps (state){
    // return{
    //     id:state.productRed.id,
    //     name:state.productRed.name,
    //     price:state.productRed.price
    // }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addProduct:bindActionCreators((state) => addProduct(state),dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);