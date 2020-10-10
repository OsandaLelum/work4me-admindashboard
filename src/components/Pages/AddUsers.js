
import axios from 'axios';
import React, { Component } from 'react'
import UsersService from '../services/UsersService';

export default class AddUsers extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePW = this.onChangePW.bind(this);
        this. onChangeUserType =this. onChangeUserType.bind(this);

        this.state = {
            Email: '',
            FirstName: '',
            LastName: '',
            PW: '',
            UserType:'',
        }
    }

    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    onChangePW(e) {
        this.setState({
            PW: e.target.value
        });
    }

    onChangeUserType(e){
        this.setState({
            UserType: e.target.value
        });
    }

    onSubmitNurse(e) {
        e.preventDefault();

        //adding new user to the database
        const user = {
            firstName: this.state.FirstName,
            lastName: this.state.LastName,
            email: this.state.Email,
            password: this.state.pw,
            userType: this.state.UserType,
        };

        console.log(user)

        UsersService.createUsers(user).then(res =>{
            this.props.history.push('/userslist');
        });

        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            PW: '',
            UserType:'',
        });

    }

    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="container-fluid">
                        <div class="row max-height justify-content-center align-items-center">
                            <div class="col-12 mx-auto">
                                <div className="row">
                                    <div className="col-md-12 mt-4">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Add Users Here</h3>
                                            </div>
                                            <form role="form">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">First Name</label>
                                                                <input type="text"
                                                                    className="form-control"
                                                                    id="fname"
                                                                    placeholder="Enter First Name"
                                                                    value={this.state.FirstName}
                                                                    onChange={this.onChangeFirstName} />
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                                                <input type="text"
                                                                    className="form-control"
                                                                    id="lname"
                                                                    placeholder="Enter Last Name"
                                                                    value={this.state.LastName}
                                                                    onChange={this.onChangeLastName} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                                <input type="email"
                                                                    className="form-control"
                                                                    id="exampleInputEmail1"
                                                                    placeholder="abc@example.com"
                                                                    value={this.state.Email}
                                                                    onChange={this.onChangeEmail} />
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">password</label>
                                                                <input type="password"
                                                                    className="form-control"
                                                                    id="pw"
                                                                    placeholder="Password"
                                                                    value={this.state.PW}
                                                                    onChange={this.onChangePW} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">User Type</label>
                                                                <input type="email"
                                                                    className="form-control"
                                                                    id="exampleInputUserType"
                                                                    value={this.state.UserType}
                                                                    onChange={this.onChangeUserType} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitNurse.bind(this)}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
