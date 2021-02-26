import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <li><Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant}/></li>
        })}
      </ul>
    );
  }
};

export default Restaurants;