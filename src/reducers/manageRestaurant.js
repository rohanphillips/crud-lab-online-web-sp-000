import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
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
       console.log("AddReview:", action.review.text) 
       console.log("AddReview ID:", action.review.restaurantId) 
       const review = {id: cuidFn(), restaurantId: action.review.restaurantId, text: action.review.text};
       return {...state, reviews: [...state.reviews, review]};
    case 'DELETE_REVIEW':
      console.log("DeleteReview:", action.payload)
      const deleteReviews = state.reviews.filter(review => review.id != action.payload);
      return {...state, reviews: deleteReviews};
  }   
  return state
};

