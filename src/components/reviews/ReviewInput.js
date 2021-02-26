import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const payLoad = {
      restaurantId: this.props.restaurant.id,
      text: this.state.text
    }
    this.props.addReview(payLoad);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>          
          <div>
            <input
              onChange={this.handleOnChange}
              type="text"
              name="text"
              value={this.state.text}
            />
          </div>
          <div>
            <div>
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
