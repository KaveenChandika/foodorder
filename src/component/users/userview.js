import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {viewUsers} from '../../actions/index';
import {editUser} from '../../actions/index';

class UserView extends Component{
    componentDidMount(){
        this.props.viewUsers();
    }

    useredit = (e) =>{
         e.preventDefault();
         var id = e.target 

        this.props.editUser(id)
        this.props.history.push('/userEdit/'+id);
    }
    render(){
        return(
            <div>
                <h2>User View</h2>
                <table   cellPadding="0"  class="table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Nic</th>
                            <th>Tel No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userData.map(function(user,index){
                                return <tr>
                                     <td>{user.fname}</td>
                                     <td>{user.address}</td>
                                     <td>{user.email}</td>
                                     <td>{user.nic}</td>
                                     <td>{user.tel}</td>
                                     <td>
                                         <input type="button" style={{width:50,padding:2}} value="Edit" className="btn btn-info" onClick={this.useredit.bind(this)} />
                                     </td>
                                     <td>
                                        <input type="button" style={{width:70,padding:2,paddingLeft:10}} value="Delete" className="btn btn-info" />
                                     </td>
                                </tr>
                            },this)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state.userRed.users);
    return{
        userData: state.userRed.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        viewUsers:bindActionCreators(()=>viewUsers(),dispatch),
        editUser:bindActionCreators(()=>editUser(),dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserView);


