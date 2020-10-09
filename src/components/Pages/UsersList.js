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
          <div>
              <div className="content-header">
                  <div className="row mb-2 mt-3 ml-2 mr-2">
                      <div className="col-sm-6">
                          <h1 className="m-0 text-dark">User List</h1>
                      </div>
                      <div className="col-sm-6">
                          <ol className="breadcrumb right float-sm-right">
                              <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                              <li className="breadcrumb-item active">User List</li>
                          </ol>
                      </div>
                  </div>
              </div>
              {/* Main content */}
              <div className="row">
                <div className="col-12">
                  <div className="card ml-3 mr-3">
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="table-striped">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead style={{backgroundColor: '#343a40', color:'rgb(212 212 212)'}}>
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

        )
    }
}
