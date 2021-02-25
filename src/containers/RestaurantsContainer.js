import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({ type: 'ADD_RESTAURANT', payload: text })
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantsContainer);
