const Status = 'bookstore/categories/Status';
const initialState = { categories: [] };
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Status:
      return { ...state, categories: 'Under construction' };
    default:
      return state;
  }
};
export default categoriesReducer;
