import React, { Component } from 'react'
import UsersService from '../services/UsersService';

class ViewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        UsersService.getUserById(this.state.id).then(res => {
            this.setState({ user : res.data.profile_data });
            // console.log(user);
        })
        console.log("hey")
    }


    // viewVerification() {
    //     if ((this.state.user.isVerified).toString() === 'true') {
    //         return <div> Verified User</div>
    //     } else {
    //         return <div> Not Verified User</div>
    //     }
    // }


    viewJobsCompleted() {
        if (this.state.user.userType == 'employee') {
            return (
            <div className="row">
                <label> Number of Jobs Completed: </label>
                <div className="mx-1"> {this.state.user.jobCompleted}</div>
            </div>);
        } else {
            return ;
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3 my-3">
                    <h3 className="text-center my-2"> View User Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> User Type:</label>
                            <div className="mx-1"> {this.state.user.userType}</div>
                        </div>
                        <div className="row">
                            <label> User First Name: </label>
                            <div className="mx-1"> {this.state.user.firstName}</div>
                        </div>
                        <div className="row">
                            <label> User Last Name: </label>
                            <div className="mx-1"> {this.state.user.lastName}</div>
                        </div>
                        <div className="row">
                            <label> User Email: </label>
                            <div className="mx-1"> {this.state.user.email}</div>
                        </div>
                        <div className="row">
                            <label> User Verification : </label>
                            <div className="mx-1">{JSON.stringify(this.state.user.isVerified)}</div>
                        </div>
                        <div className="row">
                            <label> Account created At: </label>
                            <div className="mx-1"> {this.state.user.createdAt}</div>
                        </div>
                        <div className="row">
                            <label> User Review Count: </label>
                            <div className="mx-1"> {this.state.user.reviewCount}</div>
                        </div>
                        {this.viewJobsCompleted() }
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUser
