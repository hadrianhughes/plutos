const Dash = (state = {
  incomeItems: []
}, action) => {
  switch (action.type) {
    case 'ADD_INCOME_ITEM': {
      return {
        ...state,
        incomeItems: [...state.incomeItems, {...action.item, id: action.id}]
      };
    } break;
    default: {
      return state;
    }
  }
};

export default Dash;
