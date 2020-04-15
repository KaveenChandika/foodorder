import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {viewUsers} from '../../actions/index';

class UserView extends Component{
    componentDidMount(){
        this.props.viewUsers();
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
                        {/* {
                            this.props.userData.map(function(user,index){
                                
                            })
                        } */}
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
        viewUsers:bindActionCreators(()=>viewUsers(),dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserView);


