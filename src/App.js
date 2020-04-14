import React ,{Component} from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import ProductList from './component/product/index';
import AddProduct from './component/product/add';
import EditProduct from './component/product/edit';
import {connect} from 'react-redux';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <h3>CRUD using redux</h3>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>

          <br/><br/>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/index" exact component={ProductList}></Route>
          <Route path="/add" exact component={AddProduct}></Route>
          <Route path="/edit/:id" exact component={EditProduct}></Route>
          <br/><br/>
        </div>
      </BrowserRouter>
    )
  }
}


export default (App);
