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
  </div>
);

export default FinanceBarItem;
