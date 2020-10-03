import React from 'react'

export default function AdminProfile() {
    return(
        <div>
            <div className="card mb-5">
                <div className="content-header">
                    <div className="container-fluid">
                        {/* <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Admin Profile</h1>
                            </div> */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Admin Profile</li>
                                </ol>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="card">
                    <div style={{display:"flex", margin:"20px 20px 20px 20px", width:"1000px", height:"210px", justifyContent:"space-around"}}>
                        <div style={{padding:"5px"}}>
                            <img style={{width:"200px", height:"200px", borderRadius:"100px"}}
                                src="dist/img/user2-160x160.jpg"
                            />
                        </div>
                        <div style={{padding:"5px"}}>
                            <h4><b>Osanda Lelum</b></h4>
                            <div>
                                <h5><b>Admin</b></h5>
                                <h6><b>E-mail: </b>osandalelum@gmail.com</h6>
                                <h6><b>Contact No: </b>+94771234567</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}