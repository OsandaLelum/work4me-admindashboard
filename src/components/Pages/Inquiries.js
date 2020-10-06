import React, { Component } from 'react';
import InteractiveTable from "react-interactive-table";
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(complainantFName, complainantLName, complainantUserType, complainedDate, accusedFName, accusedLName, accusationUserType, accusation) {
  return {
    complainantFName,
    complainantLName,
    complainantUserType,
    complainedDate,
    details: [
      { accusedFName: 'Palitha', accusedLName: 'Wijewardana', accusationUserType: 'Employer', accusation: 'hdgertd' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
        <TableCell>{row.complainantUserType}</TableCell>
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
                    <TableCell style={{fontWeight:'bold'}}>Accused - First Name</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Accused - Last Name</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Accused - User Type</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Accusation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.date}>
                      <TableCell component="th" scope="row">
                        {detailsRow.accusedFName}
                      </TableCell>
                      <TableCell>{detailsRow.accusedLName}</TableCell>
                      <TableCell>{detailsRow.accusationUserType}</TableCell>
                      <TableCell>{detailsRow.accusation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Kamal', 'Perera', 'Employer', '03/08/2020'),
  createData('Anurudda', 'Hewage', 'Employee', '17/08/2020'),
  createData('Ranjith', 'Alahakoon', 'Employee', '24/08/2020'),
  createData('Namali', 'Pathirana', 'Employer', '18/09/2020'),
  createData('Ananda', 'Perera', 'Employer', '29/09/2020'),
];

export default function CollapsibleTable() {
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
      <div className="card m-2">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead style={{backgroundColor: '#4f5962'}}>
              <TableRow>
                <TableCell />
                <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - First Name</TableCell>
                <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - Last Name</TableCell>
                <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Complainant - User Type</TableCell>
                <TableCell style={{color:'rgb(212 212 212)', fontSize: '16px'}}>Date of Complaint</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.accusedUserFName} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}


// class Inquiries extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             complaint: []
//         };
        
//     }
    
//     temp=[];

//     componentDidMount(){
//         /**
//             * @desc : Retrieves all the complaint records from the backend for the admin to view and filter through
//         */
//         axios.get('http://localhost:4000/reviews')
//           .then(response => {
//             console.log(response.data);
//             response.data.forEach(element => {
//               this.temp.push(element);
//             });

//             this.setState({ 
//                 complaint: response.data 
//             });
//           })
//           .catch(function (error) {
//             console.log(error);
//           })
//       }
    
//       tabRow(){
//         const data = this.temp;
//         return data;
//       }
  
//       render() {
//         // styles={{
//         //   backgroundColor: '#4f5962'
//         // }}
//         return (
//           <div>
//             <div>
//               <div className="content-header">
//                 <div className="container-fluid">
//                   <div className="row mb-2 mt-3">
//                     <div className="col-sm-6">
//                       <h1 className="m-0 text-dark">Inquiries</h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="raw">
//                 <div className="card m-2 p-2">
//                 {/*
//                   * @desc : Displays the data retrieved from the backend to the table
//                   * @requires : The InteractiveTable from react-interactive-table
//                 */}
//                   <InteractiveTable
//                       tableStyles={'responsive'}
//                       dataList={this.tabRow()} 
//                       columns={
//                           {
//                               accusedUserFName: {
//                                   alias: 'Accused - First Name',
//                                   sortable: true,
//                                   active: false,
//                                   sortingKey: 'accusedUserFName'
//                               },
//                               accusedUserLName: {
//                                   alias: 'Accused - Last Name',
//                                   sortable: true,
//                                   active: false,
//                                   sortingKey: 'accusedUserLName'
//                               },
//                               accusedByFName: {
//                                   alias: 'Complainant - First Name',
//                                   sortable: true,
//                                   active: false,
//                                   sortingKey: 'accusedByFName'
//                               },
//                               accusedByLName: {
//                                   alias: 'Complainant - Last Name',
//                                   sortable: true,
//                                   active: false,
//                                   sortingKey: 'accusedByLName'
//                               },
//                               complaint: {
//                                 alias: 'Accusation',
//                                 sortable: false,
//                                 active: false,
//                                 sortingKey: 'complaint'
//                               },
//                               complainedDate: {
//                                   alias: 'Date of Complaint',
//                                   sortable: true,
//                                   active: false,
//                                   sortingKey: 'complainedDate'
//                               }
//                           }
//                       }
//                       searching={{
//                           active: true,
//                           searchPlaceholder: 'Search...',
//                           searchKeys: ['accusedByFName', 'accusedByLName', 'accusedUserFName', 'accusedUserLName']
//                       }}
//                       paging={{
//                           maxRows: 7,
//                           prevBtn: 'Prev',
//                           nextBtn: 'Next',
//                           showAll: true,
//                           showAllText: 'show all',
//                           joinPages: false
//                       }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }
// }

// export default Inquiries;