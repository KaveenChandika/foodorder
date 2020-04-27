import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserEdit extends Component{
    render(){
        return(
            <div>
                <h2>User Edit</h2>
                <form >
                    <input 
                        type="text" 
                        style={{width:300,padding:2}} 
                        className="form-control input-sm" 
                        name="name" 
                        placeholder="Full Name" 
                        defaultValue={this.props.fname}
                        />
                    <br/>
                    <textarea 
                        type="text"
                        style={{width:300}} 
                        className="forma-control input-sm"
                        name="address"
                        rows="4"
                        defaultValue={this.props.address}
                        placeholder="Address"/>
                    <br/>                    
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="email"
                        defaultValue={this.props.email}
                        placeholder="Email"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="nic"
                        defaultValue={this.props.nic}
                        placeholder="NIC"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="tel"
                        defaultValue={this.props.tel}
                        placeholder="Tel"
                    />
                    <br/>
                    <input 
                        type="text"
                        style={{width:300,padding:2}}
                        className="form-control input-sm"
                        name="uname"
                        defaultValue={this.props.uname}
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
                        value="UPDATE USER"
                    />
                </form>

            </div>
        );
    }
}

function mapStateToProps (state){
    // console.log(state.userRed.fname);
    return{
        fname:state.userRed.fname,
        address:state.userRed.address,
        email:state.userRed.email,
        nic:state.userRed.nic,
        tel:state.userRed.tel,
        uname:state.userRed.username
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserEdit);