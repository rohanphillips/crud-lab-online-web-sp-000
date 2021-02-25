// import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':      
      state.restaurants.push(action.payload);
      console.log("added:", action.payload, " ", state.restaurants) ;
    return {restaurants: state.restaurants}
  }
  return state
};

