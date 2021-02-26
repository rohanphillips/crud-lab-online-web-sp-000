import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {  
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', review: review}),
    deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', payload: id})
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer);
