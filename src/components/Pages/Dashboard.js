import { CenterFocusStrong } from "@material-ui/icons";
import { render } from "@testing-library/react";
import axios from '../../../node_modules/axios';
import React, { Component } from "react";

export default class Dashboard extends Component {

  componentDidMount(){
    //total number of employers
    axios.get('http://localhost:4000/users/employers')
    .then(response=> {
      this.setState({
        totalEmployers : response.data.employerCount
      })
      // console.log("The total Employers : ", this.state.totalEmployers)
    })

    //total number of employees
    axios.get('http://localhost:4000/users/employees')
    .then(response=> {
      this.setState({
        totalEmployees : response.data.employeeCount
      })
    })
    // console.log("The total Employers : ", this.state.totalEmployers)

    //total number of jobs posted
    axios.get('http://localhost:4000/jobs/jobsposted')
    .then(response=> {
      this.setState({
        totalJobsPosted : response.data.jobsPosted
      })
    })
    // console.log("The total Jobs Posted : ", this.state.totalJobsPosted)

    //total number of jobs completed
    axios.get('http://localhost:4000/jobs/jobscompleted')
    .then(response=> {
      this.setState({
        totalJobsCompleted : response.data.jobsCompleted
      })
    })
    // console.log("The total Jobs Completed : ", this.state.totalJobsCompleted)

    //get jobs posted
    axios.get('http://localhost:4000/jobs/alljobs')
      .then(response => {
        this.setState({ 
          jobsPosted: response.data 
        });
      })
      .catch(function (error){
        console.log(error);
    })
  }

  render(){
    return (
      <div>
  
        {/* Content header */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 mt-3">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard Analytics</h1>
              </div>
            </div>
          </div>
        </div>
  
        {/* Content body */}
        <div className="row">
  
            <div className="col-lg-3">
                <div className="card m-2 p-2">
                  <div style={{textAlign:'center'}}>
                    <h5 style={{padding:'5px'}}>No. of Employers Registered:</h5>
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                    <p>72</p>
                    {/* <p>{this.state.totalEmployers}</p> */}
                  </div>
                </div>
            </div>
  
            <div className="col-lg-3">
                <div className="card m-2 p-2">
                  <div style={{textAlign:'center'}}>
                    <h5 style={{padding:'5px'}}>No. of Employees Registered:</h5>
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                    <p>56</p>
                    {/* <p>{this.state.totalEmployees}</p> */}
                  </div>
                </div>
            </div>
  
            <div className="col-lg-3">
                <div className="card m-2 p-2">
                  <div style={{textAlign:'center'}}>
                    <h5 style={{padding:'5px'}}>No. of Jobs Posted:</h5>
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                    <p>120</p>
                    {/* <p>{this.state.totalJobsPosted}</p> */}
                  </div>
                </div>
            </div>
  
            <div className="col-lg-3">
                <div className="card m-2 p-2">
                  <div style={{textAlign:'center'}}>
                    <h5 style={{padding:'5px'}}>No. of Jobs Completed:</h5>
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                    <p>90</p>
                    {/* <p>{this.state.totalJobsCompleted}</p> */}
                  </div>
                </div>
            </div>
  
        </div>
  
        <div>
          <div>
            <div className="row">
              <div className="col-lg-6">
  
                <div className="card m-2" style={{height:'440px'}}>
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title" style={{fontWeight:'bold'}}>Online Users</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex">
                      <p className="d-flex flex-column">
                        <span>Visitors Today</span>
                        <span className="text-bold text-lg">820</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="position-relative mb-4">
                      <canvas id="visitors-chart" height={200} />
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="mr-2">
                        <i className="fas fa-square text-primary" /> Employees
                      </span>
                      <span>
                        <i className="fas fa-square text-gray" /> Employers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                {/* /.card */}
              <div className="col-lg-6">
                <div className="card mt-2 ml-2 mr-2" style={{height:'440px'}}>
                  <div className="card-header border-0">
                    <h3 className="card-title" style={{fontWeight:'bold'}}>Recent Available Jobs</h3>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Job Title</th>
                          <th>Location</th>
                          <th>Description</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Wash Car</td>
                          <td>Kollupitiya</td>
                          <td>Wash and clean the car</td>
                          <td>Rs.5000.00</td>
                        </tr>
                        <tr>
                        <td>Gardening</td>
                          <td>Rathmalana</td>
                          <td>Cut the grass</td>
                          <td>Rs.1000.00</td>
                        </tr>
                        <tr>
                        <td>Delivery Boy</td>
                          <td>Nugegoda</td>
                          <td>Deliver food</td>
                          <td>Rs.2000.00</td>
                        </tr>
                        <tr>
                        <td>Wash Car</td>
                          <td>Bambalapitiya</td>
                          <td>Wash and clean the car</td>
                          <td>Rs.4000.00</td>
                        </tr>
                        <tr>
                        <td>Data Entry</td>
                          <td>Kollupitiya</td>
                          <td>Enter data</td>
                          <td>Rs.800.00</td>
                        </tr>
                        <tr>
                        <td>Delivery Boy</td>
                          <td>Kollupitiya</td>
                          <td>Deliver Pizza</td>
                          <td>Rs.3000.00</td>
                        </tr>
                        <tr>
                        <td>Delivery Boy</td>
                          <td>Kollupitiya</td>
                          <td>Deliver Pizza</td>
                          <td>Rs.3000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
