import React, { Component } from "react";

import axios from '../../../node_modules/axios';
import { PieChart } from 'react-minimal-pie-chart';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEmployers: 0,
      totalEmployees: 0,
      totalJobsPosted: 0,
      totalJobsCompleted: 0,
      inquiriesCount: 0,
      inquiriesSolved: 0,
      jobCategoryCount: []
    }
  }

  componentDidMount(){

    //total number of employers
    axios.get('http://localhost:4000/users/countEmployers')
    .then(response=> {
      this.setState({
        totalEmployers : response.data.employerCount
      })
      // console.log("The total Employers : ", this.state.totalEmployers)
    })

    //total number of employees
    axios.get('http://localhost:4000/users/countEmployees')
    .then(response=> {
      this.setState({
        totalEmployees : response.data.employeeCount
      })
      // console.log("The total Employees : ", this.state.totalEmployees)
    })

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

    //count according to the job categorey
    axios.get('http://localhost:4000/jobs/countJobCategory')
    .then(response=> {
      this.setState({
        jobCategoryCount : response.data.jobCategoryCount
      })
    })
    // console.log("The total Jobs type : ", this.state.jobType[0])

    //total inquiries count
    axios.get('http://localhost:4000/inquiries/countInquiries')
    .then(response => {
        this.setState({
            inquiriesCount : response.data.inquiriesCount
        })

        console.log(this.state.inquiriesCount)
    })

    //total solved count
    axios.get('http://localhost:4000/inquiries/inquiriesSolved')
    .then(response => {
        this.setState({
            inquiriesSolved : response.data.inquiriesSolved
        })

        console.log(this.state.inquiriesSolved)
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
        <div>
          <div>
            <div className="row">
              <div className="col-lg-6">
  
                <div className="card m-2" style={{height:'440px'}}>
                  <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                      <h3 className="card-title" style={{fontWeight:'bold'}}>Number of Users</h3>
                    </div>
                  </div>
                  <div className="card-body" style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <div>
                          <PieChart
                            data={[
                              //{ title: 'Employers', value: 3, color: '#343a40' },
                              //{ title: 'Employees', value: 5, color: '#6c757d' },
                              { title: 'Employers', value: this.state.totalEmployees, color: '#343a40' },
                              { title: 'Employees', value: this.state.totalEmployers, color: '#6c757d' },
                            ]}
                            style={{height: 270, width: 270, marginLeft:"25%"}}
                            center={[50, 50]}
                            lengthAngle={360}
                            lineWidth={50}
                            paddingAngle={0}
                            radius={50}
                            // rounded
                            startAngle={0}
                            viewBoxSize={[100, 100]}
                            label={(data) => data.dataEntry.title}
                            labelPosition={70}
                            labelStyle={{
                              fontSize: "5px",
                              fill: "white",
                              fontWeight: "500",
                            }}
                          />;
                        </div>      
                    </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mt-2 ml-2 mr-2" style={{height:'440px'}}>
                  <div className="card-header border-0">
                    <h3 className="card-title" style={{fontWeight:'bold'}}>Job Categories</h3>
                  </div>
                  <div className="card-body">
                    <div style={{justifyContent: 'center'}} >
                      <PieChart
                        data={[
                          // { title: 'Gardening', value: 10, color: '#343a40' },
                          // { title: 'Data Entry', value: 15, color: '#6c757d' },
                          // { title: 'Delivery Boy', value: 20, color: '#848480' },
                          { title: 'Household', value: this.state.jobCategoryCount[0], color: '#343a40' },
                          { title: 'IT', value: this.state.jobCategoryCount[1], color: '#434a52' },
                          { title: 'Driving', value: this.state.jobCategoryCount[2], color: '#5b6269' },
                          { title: 'Technician', value: this.state.jobCategoryCount[3], color: '#6c757d' },
                          { title: 'Education', value: this.state.jobCategoryCount[4], color: '#adadad' },
                        ]}
                        style={{height: 270, width: 270, marginLeft:"25%"}}
                        center={[50, 50]}
                        lengthAngle={360}
                        lineWidth={50}
                        paddingAngle={0}
                        radius={50}
                        // rounded
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                        label={(data) => data.dataEntry.title}
                        labelPosition={70}
                        labelStyle={{
                          fontSize: "5px",
                          fill: "white",
                          fontWeight: "500",
                        }}
                      />;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
              <div className="col-lg-3">
                  <div className="card ml-2 mr-2 mt-2 mb-1 p-2">
                    <div style={{textAlign:'center'}}>
                      <h5 style={{padding:'5px'}}>No. of Jobs Posted:</h5>
                    </div>
                    <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                      {/* <p>120</p> */}
                      <p>{this.state.totalJobsPosted}</p>
                    </div>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="card ml-2 mr-2 mt-2 mb-1 p-2">
                    <div style={{textAlign:'center'}}>
                      <h5 style={{padding:'5px'}}>No. of Jobs Completed:</h5>
                    </div>
                    <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                      {/* <p>90</p> */}
                      <p>{this.state.totalJobsCompleted}</p>
                    </div>
                  </div>
              </div>
              <div className="col-lg-3">
                <div className="card ml-2 mr-2 mt-2 mb-1 p-2">
                  <div style={{textAlign:'center'}}>
                    <h5 style={{padding:'5px'}}>No. of Complaints:</h5>
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                    {/* <p>72</p> */}
                    <p>{this.state.inquiriesCount}</p>
                  </div>
                </div> 
              </div> 
              <div className="col-lg-3">
                  <div className="card ml-2 mr-2 mt-2 mb-1 p-2">
                    <div style={{textAlign:'center'}}>
                      <h5 style={{padding:'5px'}}>No. of Complaints Solved:</h5>
                    </div>
                    <div style={{textAlign:'center', fontWeight:'bold', fontSize:'30px'}}>
                      {/* <p>56</p> */}
                      <p>{this.state.inquiriesSolved}</p>
                    </div>
                  </div>
              </div>
            {/* </div>  */}
          </div>
        </div>
      </div>
    );
  }
}
