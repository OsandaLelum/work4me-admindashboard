import React, { Component } from 'react'
import UsersService from '../services/UsersService';

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
    }

    deleteUser = (id) =>{
      console.log("delete")
        UsersService.deleteUsers(id).then( res => {
          this.setState({users: this.state.users.filter(user => user._id !== id)});
      });
    }

    viewUser =(id) =>{
        this.props.history.push(`/view-user/${id}`);
    } 
    editEmployee = (id) =>{
        this.props.history.push(`/signup/${id}`);
    }

    componentDidMount= ()=>{
        UsersService.getUsers().then((res) => {
            this.setState({ users: res.data});
            
        console.log(this.state.users);
        });
    }

    addEmployee =()=>{
        this.props.history.push('/signup');
    }

    render() {
        return (
            <div className="m-5">
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                
                                    <th> User Type</th>
                                    <th> User First Name</th>
                                    <th> User Last Name</th>
                                    <th> User Email</th>
                                    <th> isVerified </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user._id}>
                                        
                                             <td> {user.userType}</td>
                                             <td> {user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.email}</td>
                                             <td> {user.isVerified.toString()}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user._id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}

export default UsersList
