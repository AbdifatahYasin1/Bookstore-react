const status = 'bookstore/categories/Status';

const initialState = {
  status: '',
};

export function checkStatus() {
  return { type: status };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case status:
      return { ...state, status: 'Under construction' };
    default:
      return state;
  }
}
