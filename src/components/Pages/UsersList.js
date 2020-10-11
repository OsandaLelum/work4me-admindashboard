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
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2 mt-3">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Users List</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb right float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                                    <li className="breadcrumb-item active">Users List</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-5">
                    <div className = "row">
                        <button className="btn btn-primary" style={{backgroundColor: '#343a40', borderColor: '#343a40'}} onClick={this.addEmployee}> Add User</button>
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
            </div>
        )
    }
}

export default UsersList
