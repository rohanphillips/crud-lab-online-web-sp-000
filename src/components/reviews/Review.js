import React, { Component } from 'react';

class Review extends Component {
  handleDelete = event => {
    // console.log("ID:", event.target.id, this.props);
    this.props.deleteReview(event.target.id);
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button name="reviewdelete" id={review.id} onClick={this.handleDelete}> X </button>
      </div>
    );
  }

};

export default Review;
