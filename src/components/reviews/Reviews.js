import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => {
          return <li><Review deleteReview={this.props.deleteReview} review={review}/></li>
        })}
      </ul>
    );
  }
};

export default Reviews;