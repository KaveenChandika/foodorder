import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProduct,editProduct} from '../../actions/index';
import {getProducts} from '../../actions/index';
import {bindActionCreators} from 'redux';
import axios from 'axios';
class ProductList extends Component{
    componentDidMount(){
        // axios.get('http://localhost:5000/api/hello')
        // .then(res => {
        //     console.log(res);
        // })
        this.props.getProducts()
    }

    delete = (e) =>{
        var id  = e.target.getAttribute('data-id');
        this.props.deleteProduct(id);
        window.location.href="/";
    }

    edit = (e) =>{
        e.preventDefault();
        var id  = e.target.getAttribute('data-id');
        this.props.editProduct(id);
        this.props.history.push('/edit/'+id);
    }

    render(){
        return(
            <div>
                <h3>Product List</h3>
                <table   cellPadding="0"  class="table">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(function(product,index){
                            return  <tr key={product._id}>
                                <td>{product.p_id}</td>
                                <td>{product.p_name}</td>
                                <td>{product.p_price}</td>
                                <td>{product.qty}</td>
                                <td>
                                    <input type="button" style={{width:100,padding:2}} className="btn btn-info" value="Edit" data-id={product._id}  onClick={this.edit.bind(this)} />
                                    <input type="button" style={{width:100,padding:2}} className="btn btn-danger" value="Delete" data-id={product._id}  onClick={this.delete.bind(this)} />
                                </td>
                            </tr>
                        },this)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
        return{
            products:state.productRed.products
        }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getProducts: bindActionCreators(getProducts,dispatch),
        editProduct:bindActionCreators((id) => editProduct(id),dispatch),
        deleteProduct: bindActionCreators( (id) =>deleteProduct(id),dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);