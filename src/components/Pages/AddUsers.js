
import axios from 'axios';
import React, { Component } from 'react'
// import axios from './../../../../backend/node_modules/axios';
// import md5 from 'md5';


export default class AddUsers extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePW = this.onChangePW.bind(this);

        this.state = {
            Email: '',
            FirstName: '',
            LastName: '',
            PW: ''
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

    onSubmitNurse(e) {
        e.preventDefault();


        //adding new user to the database
        const object = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            PW: this.state.pw,
        };

        console.log(object)

        axios.post('http://localhost:4000/users/add', object)
            .then(res => { console.log(res.data) });
        console.log("Registered");
        alert(`Succesfully Registered`);

        this.setState({
            FirstName: '',
            LastName: '',
            Email: '',
            PW: ''
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
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder="abc@example.com"
                                                            value={this.state.Email}
                                                            onChange={this.onChangeEmail} />
                                                    </div>
                                                    <div className="row">
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
