let nextIncomeId = 0;
export const actAddIncomeItems = items => {
  return {
    type: 'ADD_INCOME_ITEMS',
    id: nextIncomeId++,
    items
  };
};
