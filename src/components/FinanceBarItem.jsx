import React from 'react';

import '../styles/FinanceBarItem.scss';

const FinanceBarItem = ({
  name,
  source,
  amount,
  period,
  note,
  portion,
  color
}) => (
  <div className="FinanceBarItem" style={{width: portion + '%', backgroundColor: color}}>
    <div className="FinanceBarItem__details-bubble">
      <ul className="FinanceBarItem__details">
        <li className="FinanceBarItem__detail">{name}</li>
        <li className="FinanceBarItem__detail">{amount}</li>
        <li className="FinanceBarItem__detail">{period}</li>
        <li className="FinanceBarItem__detail">{source}</li>
        <li className="FinanceBarItem__detail">{note}</li>
      </ul>
    </div>
  </div>
);

export default FinanceBarItem;
