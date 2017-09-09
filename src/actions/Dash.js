let nextIncomeId = 0;
export const actAddIncomeItem = item => {
  return {
    type: 'ADD_INCOME_ITEM',
    id: nextIncomeId++,
    item
  };
};
