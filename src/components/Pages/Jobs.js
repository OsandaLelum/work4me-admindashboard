import React from 'react'

class Jobs extends React.Component{

  constructor (props){
    super(props);
    this.state = {jobs:[]};
    //MarkAsValid function is triggered when the check box is clicked,
    this.markAsValid = this.markAsValid.bind(this);
  }

  componentDidMount() {
    //When the component mounts, add your JOB endpoint here
      fetch('http://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then((data) => {
              this.setState({ jobs: data }) //JOBS state is updated here,
          })
          .catch(console.log)
  }

  markAsValid(e){
    //add function to update status of a job (valid or invalid)
    //This could be a post endpoint
    console.log(e.currentTarget.id); //JOB ID can be taken from here

    //use the ID to send it to the server using fetch API
    fetch('/updateJobStatus', {
       method: 'post',
       headers: {'Content-Type':'application/json'},
       body: {
        "job_id": e.currentTarget.id 
       }
      });

  }

  render(){
    //Write the render function to JOB's endpoint parameters (fields/attributes) from the state
    return <div className="card-body">
        <div className="d-flex">
            <p className="d-flex flex-column">
                <span className="text-bold text-lg">Job Management</span>
            </p>
        </div>
        <div class="container">
          <table class="table">
            <tr>
              <th>Job No</th>
              <th>Job's Owner</th>
              <th>Description</th>
              <th>Approved?</th>
            </tr>
            {this.state.jobs.map((job) => (
            <tr>
                    <td>{job.id}</td>
                    <td>{job.name}</td>
                    <td>{job.username}'s job</td>
                    <td><input type="checkbox" onClick={this.markAsValid} id={job.id}/></td>

            </tr>
        ))}
          </table>
        </div>
    </div>
  }

}

export default Jobs;
