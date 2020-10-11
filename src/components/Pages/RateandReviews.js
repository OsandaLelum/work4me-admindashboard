import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './RateandReview.css';

import axios from '../../../node_modules/axios';

export default class RateandReviews extends Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/review/allreviews')
            .then(response => {
                this.setState({ reviews: response.data });
                console.log(this.state.reviews);
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2 mt-3">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Reviews</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb right float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                                    <li className="breadcrumb-item active">Reviews</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-2" style={{ height: '600px', overflowY: 'scroll' }}>
                    <div>
                        {
                            this.state.reviews.map(
                                review =>
                                    <div className="reviewCard" key={review._id} style={{}}>
                                        <div>
                                            <h6>Review By: {review.ReviewByWhom.firstName}</h6>
                                            <hr
                                                style={{
                                                    color: 'grey',
                                                    height: '2px'
                                                }}
                                            />
                                            <h6>Review To: {review.ReviewToWhom.firstName}</h6>
                                        </div>
                                        <hr
                                            style={{
                                                color: 'grey',
                                                height: '2px'
                                            }}
                                        />
                                        <div>
                                            <p>{review.ReviewContent}</p>

                                        </div>
                                        <hr
                                            style={{
                                                color: 'grey',
                                                height: '2px'
                                            }}
                                        />

                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
