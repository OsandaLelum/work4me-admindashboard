import axios from 'axios';
import React, { Component } from 'react'

const UserReg = props => (
    <tr>
        <td>{props.userlist.firstName}</td>
        <td>{props.userlist.lastName}</td>
        <td>{props.userlist.email}</td>
    </tr>
)

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {USERS_DATA: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Users/')
            .then(response => {
                this.setState({ USERS_DATA: response.data });
            })
            .catch(function (error){
                console.log(error);
            })       
    }

    Users() {
        return this.state.USERS_DATA.map(function( currentlist, i){
            return <UserReg userlist={currentlist} key={i} />;
        })
    }

    /**
     * @desc Viewing the nurse list of the system by the CARE ME Admin  and can redirect to their profiles
     */

    render() {
        return (
          <div className="mt-5">
                <div className="mt-5">
                  {/* Main content */}
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header">
                            <h3>Details of Users in Work4ME</h3>
                          </div>
                          {/* /.card-header */}
                          <div className="card-body">
                          <div className="table-striped">
                            <table id="example2" className="table table-bordered table-hover">
                              <thead className="thead-dark">
                                <tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Email</th>
                                </tr>
                              </thead>

                              <tbody className="table-striped">
                                      { this.Users() }
                              </tbody>
                            </table>
                            </div>
                          </div>
                          {/* /.card-body */}
                        </div>
                        {/* /.card */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  {/* /.content */}
                </div>
                {/* /.content-wrapper */}
          </div>

        )
    }
}
