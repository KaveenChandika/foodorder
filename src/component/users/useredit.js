import React , {Component} from 'react';

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
                        value="UPDATE USER"
                    />
                </form>

            </div>
        );
    }
}

export default UserEdit;