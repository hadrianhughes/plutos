import React from 'react';

import CTA from './CTA.jsx';

const CTACollection = ({
  classes,
  buttons,
  onClick
}) => (
  <div className={classes}>
    {buttons.map((item, index) => (
      <CTA key={index} classes={item.classes} onClick={() => onClick(item.eventId)} label={item.label} />
    ))}
  </div>
);

export default CTACollection;
