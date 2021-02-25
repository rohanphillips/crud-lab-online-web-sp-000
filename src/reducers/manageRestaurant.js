// import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      console.log("adding:", action.payload, " ", state.restaurants) ;
      state.restaurants.push(action.payload);
    return {restaurants: state.restaurants}
  }
  return state
};

