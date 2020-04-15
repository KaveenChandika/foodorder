import React ,{Component} from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import ProductList from './component/product/index';
import AddProduct from './component/product/add';
import EditProduct from './component/product/edit';
import UserAdd from './component/users/useradd';
import UserView from './component/users/userview';
import {connect} from 'react-redux';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
          <div class="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <a class="navbar-brand" href="#">Food Order</a>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  {/* <li class="nav-item active">
                    <Link class="nav-link"  to="/">Home</Link>
                  </li> */}
                  <li class="nav-item active">
                    <Link class="nav-link"  to="/userAdd">User Add</Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link"  to="/userView">User View</Link>
                  </li>
                  <li class="nav-item active">
                    <Link class="nav-link"  to="/add">Product Add</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="container">
            <br/><br/>
            <Route path="/" exact component={ProductList}></Route>
            <Route path="/index" exact component={ProductList}></Route>
            <Route path="/add" exact component={AddProduct}></Route>
            <Route path="/edit/:id" exact component={EditProduct}></Route>
            <Route path="/userAdd" exact component={UserAdd}></Route>
            <Route path="/userView" exact component={UserView}></Route>
            <br/><br/>
          </div>
      </BrowserRouter>
    )
  }
}


export default (App);
