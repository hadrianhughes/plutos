let nextIncomeId = 0;
export const actAddIncomeItem = item => ({
  type: 'ADD_INCOME_ITEM',
  id: nextIncomeId++,
  item
});

export const actControlButtonClick = id => ({
  type: id
});
