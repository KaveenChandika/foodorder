import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { addUsers} from '../../actions';

class UserAdd extends Component{

    handleSumit = (e) =>{
        e.preventDefault();
        var data = {
            name:e.target.name.value,
            address:e.target.address.value,
            email:e.target.email.value,
            nic:e.target.nic.value,
            tel:e.target.tel.value,
            uname:e.target.uname.value,
            pwd:e.target.pwd.value
        }
        this.props.addUsers(data);
        window.location.href='/userView';
        // window.location.reload();
    }

    render(){
        return(
            <div>
                <h2>User Add</h2>
                <form onSubmit={this.handleSumit}>
                    <input 
                        type="text" 
                        style={{width:300,padding:2}} 
                        className="form-control input-sm" 
                        name="name" 
                        placeholder="Full Name" 
                        />
                    <br/>
                    <textarea 
                        type="text"
                        style={{width:300}} 
                        className="forma-control input-sm"
                        name="address"
                        rows="4"
                        placeholder="Address"/>
                    <br/>                    
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="email"
                        placeholder="Email"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="nic"
                        placeholder="NIC"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="tel"
                        placeholder="Tel"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="uname"
                        placeholder="Username"
                    />
                    <br/>
                    <input 
                        type="password"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="pwd"
                        placeholder="Password"
                    />
                    <br/>
                    <input 
                        type="submit"
                        style={{width:300,padding:2}}
                        className="btn btn-info"
                        value="Sing Up"
                    />

                </form>
            </div>
        );
    }
}

function mapStateToProps(){

}

const mapDispatchToProps = (dispatch) =>{
    return{
        addUsers: bindActionCreators((data)=> addUsers(data),dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserAdd);