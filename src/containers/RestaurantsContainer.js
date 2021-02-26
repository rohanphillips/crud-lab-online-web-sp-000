import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} state={this.props.state}/>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({ type: 'ADD_RESTAURANT', payload: text }),
    deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id: id })
  };
};

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantsContainer);
