import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.state.restaurants.map(restaurant => {
          return <li><Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} reviews={this.props.state.reviews}/></li>
        })}
      </ul>
    );
  }
};

export default Restaurants;