import React from 'react';

import CTA from '../components/CTA.jsx';

const ControlPanel = ({
  incomeView,
  labelViewOutgoings,
  labelViewIncome,
  onToggleView
}) => (
  <div className="ControlPanel">
    <CTA classes="ControlPanel__button" label={incomeView ? labelViewIncome : labelViewOutgoings} onClick={onToggleView} />
  </div>
);

export default ControlPanel;
