import React from 'react';

import FinanceBarItem from './FinanceBarItem.jsx';

import '../styles/FinanceBar.scss';

const FinanceBar = ({ incomeItems }) => (
  <div className="FinanceBar">
    {incomeItems.map(item => (
      <FinanceBarItem
        key={item.id}
        name={item.name}
        source={item.source}
        amount={item.amount}
        period={item.period}
        note={item.note}
        portion={item.portion} />
    ))}
  </div>
);

export default FinanceBar;
