const Dash = (state = {
  incomeItems: [],
  totalIncome: 0
}, action) => {
  switch (action.type) {
    case 'ADD_INCOME_ITEM': {
      const total = state.totalIncome + action.item.amount;
      let incomeItems = [...state.incomeItems, {...action.item, id: action.id}];
      incomeItems = incomeItems.map(item => (
        {
          ...item,
          portion: (item.amount / total) * 100
        }
      ));
      return {
        ...state,
        incomeItems: incomeItems,
        totalIncome: total
      };
    } break;
    default: {
      return state;
    }
  }
};

export default Dash;
