import React ,{Component} from 'react';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import ProductList from './component/product/index';
import AddProduct from './component/product/add';
import EditProduct from './component/product/edit';
import UserAdd from './component/users/useradd';
import UserView from './component/users/userview';
import UserEdit from './component/users/useredit';
import LoginView from './component/Login/loginView';
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
                  {/* <li class="nav-item active">
                    <Link class="nav-link"  to="/add">Product Add</Link>
                  </li> */}
                  <li class="nav-item active">
                    <Link class="nav-link"  to="/userEdit"></Link>
                  </li>`
                </ul>
              </div>
            </nav>
          </div>

          <div className="container">
            <br/><br/>
            {/* <Route path="/" exact component={ProductList}></Route> */}
            {/* <Route path="/index" exact component={LoginView}></Route> */}
            <Route path="/" exact component={LoginView}></Route>
            <Route path="/add" exact component={AddProduct}></Route>
            <Route path="/edit/:id" exact component={EditProduct}></Route>
            <Route path="/userAdd" exact component={UserAdd}></Route>
            <Route path="/userView" exact component={UserView}></Route>
            <Route path="/userEdit/:id" exact  component={UserEdit}></Route>
            <br/><br/>
          </div>
      </BrowserRouter>
    )
  }
}


export default (App);
