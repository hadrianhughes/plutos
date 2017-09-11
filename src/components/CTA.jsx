import React from 'react';

const CTA = ({
  classes,
  label,
  onClick
}) => (
  <button className={'CTA ' + classes} onClick={onClick}>{label}</button>
);

export default CTA;
