import React from 'react';

import '../styles/FinanceBarItem.scss';

const FinanceBarItem = ({
  name,
  source,
  amount,
  period,
  note,
  portion
}) => (
  <div className="FinanceBarItem" style={{width: portion + '%'}}>
  </div>
);

export default FinanceBarItem;
