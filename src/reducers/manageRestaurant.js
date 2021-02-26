import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':           
      const restaurant = {id: cuidFn(), text: action.payload, reviews: []};
      // console.log("adding:", restaurant, state.restaurants)
      return {...state, restaurants:[...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
      // console.log("Restaurants:", state.restaurants)  
      // console.log("ActionID", action.id);
      // console.log("Will return:", {...state, restaurants:[...state.restaurants.filter(restaurant => restaurant.id !== action.id)]})  
      // console.log("Length:",[...state.restaurants.filter(restaurant => restaurant.id !== action.id)].length)
      const rest = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {...state, restaurants: rest}
    case 'ADD_REVIEW':
       console.log("AddReview:", action.payload.text) 
       console.log("AddReview ID:", action.payload.restaurantId) 
       const rest1 = state.restaurants.find(restaurant => restaurant.id === action.payload.restaurantId);
       const review = {id: cuidFn(), text: action.payload.text};
       console.log("rest1 reviews:", rest1.reviews)
       rest1.reviews.push(review);
       return {...state, restaurants: state.restaurants}
    case 'DELETE_REVIEW':
      console.log("DeleteReview:", action.payload)
  } 
  return state
};

