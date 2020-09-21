import React from 'react'

// const users = [
//     { _id: 1, first_name: "foo",  last_name: "abc", email: "foo@gmail.com", user_type: "employer"},
//     { _id: 2, first_name: "bar",  last_name: "efg", email: "bar@gmail.com", user_type: "employer"},
//     { _id: 3, first_name: "baz",  last_name: "hij", email: "baz@gmail.com", user_type: "employer"}
//   ];

export default function AddUsers() {
    // render(){
        return(
            <div>
                <div className="card mb-5">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="col-sm-6">
                                <ol className="breadcrumb right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Users</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="card" style={{width:"1000px"}}>
                        <div className="card-header border-0">
                            <h3 className="card-title">New Users</h3>
                        </div>
                        <div className="card-body table-responsive p-2">
                            <table className="table table-striped table-valign-middle">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>E-mail</th>
                                        <th>User Type</th>
                                        <th>Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="dist/img/default-150x150.png"
                                                alt="Person"
                                                className="img-circle img-size-32 mr-2"
                                            />
                                            Saman
                                        </td>
                                        <td>Perera</td>
                                        <td>saman.perera@gmail.com</td>
                                        <td>Employer</td>
                                        <td>
                                            <button class="btn-primary">Add</button>
                                        </td>
                                        {/* {this.userList()} */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
            </div>
        )
    // }
}
