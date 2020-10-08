import { render } from '@testing-library/react';
import React, { Component } from 'react'

import StarRatings from '../../../node_modules/react-star-ratings';
import axios from '../../../node_modules/axios';

// const ReviewsBy = props => (
//     <div>
//         <h5>Review By: {props.reviewlist.ReviewByWhom}</h5>
//         <h5>Review To: {props.reviewlist.ReviewToWhom}</h5>
//     </div>
// )

// const Reviews = props => (
//     <div>
//         <p>{props.reviewlist.ReviewContent}</p>
//     </div>
// )

// const Rating = props => {
//     <div>
//         <StarRatings
//             rating={3}
//             starRatedColor="orange"
//             changeRating={props.reviewlist.ReviewScore}
//             numberOfStars={5}
//             name='rating'
//             starDimension='30px'
//         />
//     </div>
// }

export default class RateandReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {reviews: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/review/allreviews')
            .then(response => {
                this.setState({ reviews: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // ReviewsBy() {
    //     return this.state.reviews.map(function( currentlist, i){
    //         return <ReviewsBy reviewlist={currentlist} key={i} />;
    //     })
    // }

    // Reviews() {
    //     return this.state.reviews.map(function( currentlist, i){
    //         return <Reviews reviewlist={currentlist} key={i} />;
    //     })
    // }

    // Rating() {
    //     return this.state.reviews.map(function( currentlist, i){
    //         return <Rating reviewlist={currentlist} key={i} />;
    //     })
    // }

    render(){
        return(
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2 mt-3">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Rate and Reviews</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb right float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Dashboard">Home</a></li>
                                    <li className="breadcrumb-item active">Rate and Reviews</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-2" style={{ height: '600px', overflowY: 'scroll' }}>
                    <div>
                        <div className="content-header pl-4 pt-3">
                            {/* { this.ReviewsBy() } */}
                            <div>
                                <h5>Review By: Kamala Perera</h5>
                                <h5>Review To: Mala de Silva</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* { this.Reviews() } */}
                            <div>
                                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: 
                                    a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. 
                                    In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
                                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
                                    Length and appearance do not determine whether a section in a paper is a paragraph.
                                </p>
                            </div>
                            <div className="pt-3">
                                {/* { this.Rating() } */}
                                <StarRatings
                                    rating={3}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='30px'
                                />
                            </div>
                            <div>
                                <hr
                                    style={{
                                        color: 'grey',
                                        height: '2px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content-header pl-4 pt-3">
                            <div>
                                <h5>Review By: Anurada Hewage</h5>
                                <h5>Review To: Nimal Karunarathna</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: 
                                    a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. 
                                    In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
                                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
                                    Length and appearance do not determine whether a section in a paper is a paragraph.
                                </p>
                            </div>
                            <div className="pt-3">
                                <StarRatings
                                    rating={1}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='30px'
                                />
                            </div>
                            <div>
                                <hr
                                    style={{
                                        color: 'grey',
                                        height: '2px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content-header pl-4 pt-3">
                            <div>
                                <h5>Review By: Sunil Atapattu</h5>
                                <h5>Review To: Nihal Abeykoon</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <div>
                                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: 
                                    a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. 
                                    In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
                                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
                                    Length and appearance do not determine whether a section in a paper is a paragraph.
                                </p>
                            </div>
                            <div className="pt-3">
                                <StarRatings
                                    rating={2.5}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension='30px'
                                />
                            </div>
                            <div>
                                <hr
                                    style={{
                                        color: 'grey',
                                        height: '2px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
  