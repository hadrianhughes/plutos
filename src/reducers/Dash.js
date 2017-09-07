const Dash = (state = {
  incomeItems: []
}, action) => {
  switch (action.type) {
    case 'ADD_INCOME_ITEMS': {
      return {
        ...state,
        incomeItems: [...state.incomeItems, ...action.items]
      };
    } break;
    default: {
      return state;
    }
  }
};

export default Dash;
