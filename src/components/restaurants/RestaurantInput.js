import React, { Component } from 'react';

class RestaurantInput extends Component {
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
    console.log("submit:", event.target.name)
    this.props.addRestaurant(this.state.text);
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>          
          <div>
            <input
              onChange={this.handleOnChange}
              type="text"
              id="text"
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

export default RestaurantInput;
