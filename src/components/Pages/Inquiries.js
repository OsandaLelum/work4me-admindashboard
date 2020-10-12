import React, { Component,useState,useEffect }  from 'react';
// import InteractiveTable from "react-interactive-table";
import axios from '../../../node_modules/axios';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { render } from '@testing-library/react';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(complainantFName, complainantLName, userType, complainedDate, complaint) {
  return {
    complainantFName,
    complainantLName,
    userType,
    complainedDate,
    complaint
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
 // const [data, setData] = useState({ hits: [] });
  const classes = useRowStyles();
 /*  useEffect(async () => {
    const result = await axios('http://localhost:4000/inquiries/inquiriesDetails'); 
    setData(result.data);
  }); */
console.log("FGHFGHFGH",row)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.complainantFName}
        </TableCell>
        <TableCell>{row.complainantLName}</TableCell>
        <TableCell>{row.userType}</TableCell>
        <TableCell>{row.complainedDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                More Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:'bold'}}>Complaint</TableCell>
                    <TableCell>
                      <div className = "row">
                        
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{maxWidth: '80px'}}>{row.complaint}</TableCell>
                    <TableCell style={{maxWidth: '10px'}}>
                        <div>
                          <button 
                            className="btn btn-primary" 
                            style={{backgroundColor: '#343a40', borderColor: '#343a40', verticalAlign: 'center'}} 
                            // onClick={this.onUpdate}
                            > 
                            Resolved 
                          </button>
                        </div>
                    </TableCell>
                    {/* <TableCell>{row.complainantUserType}</TableCell>
                    <TableCell>{row.complainedDate}</TableCell> */}
                  </TableRow>
                  {/*{row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.date}>
                      <TableCell component="th" scope="row">
                        {detailsRow.complaint}
                      </TableCell>
                      <TableCell style={{maxWidth: '10px'}}>
                        <div style={{marginRight: '50px', marginLeft: '60px'}}>
                          <button 
                            className="btn btn-primary" 
                            style={{backgroundColor: '#343a40', borderColor: '#343a40', verticalAlign: 'center'}} 
                            onClick={this.onUpdate}> 
                            Resolved 
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}*/}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

var row=[];
// [
//   createData('Kamal', 'Perera', 'Employer', '03/08/2020'),
//   createData('Anurudda', 'Hewage', 'Employee', '17/08/2020'),
//   createData('Ranjith', 'Alahakoon', 'Employee', '24/08/2020'),
//   createData('Namali', 'Pathirana', 'Employer', '18/09/2020'),
//   createData('Ananda', 'Perera', 'Employer', '29/09/2020'),
// ];
// onUpdate = (e) => {
//   e.preventDefault();

//   const status = ''

//   axios.put('http://localhost:4000/inquiries/status'})
//       .then(response => {
          
//       });
  
// }

export default class Inquiries extends Component {

  constructor(props) {
    super(props);
    this.state = { inquiries: [] };
  }
  
  componentDidMount() {
  
    //get the inquiries details
    axios.get('http://localhost:4000/inquiries/inquiriesDetails')
        .then(response => {
            row=response.data
            this.setState({ inquiries: response.data });
            console.log("ROWWW",this.state.inquiries[0]);
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  render(){
    return (
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 mt-3">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Inquiries</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb right float-sm-right">
                    <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                    <li className="breadcrumb-item active">Inquiries</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card m-2" style={{ height: '600px', overflowY: 'scroll' }}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead style={{backgroundColor: '#343a40'}}>
                <TableRow>
                  <TableCell />
                  <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - First Name</TableCell>
                  <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - Last Name</TableCell>
                  <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - User Type</TableCell>
                  <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Date of Complaint</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.inquiries.map((row,i) => {
                  return(
                  <Row key={i} row={row} />
                  )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}
