import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {  
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.restaurant.reviews}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    addReview: (payload) => dispatch({ type: 'ADD_REVIEW', payload: payload}),
    deleteReview: (payload) => dispatch({ type: 'DELETE_REVIEW', payload: payload})
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer);
