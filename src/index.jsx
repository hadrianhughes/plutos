import React from 'react';
import { render } from 'react-dom';

import './styles/base.scss';

import DashContainer from './containers/DashContainer.jsx';

render(
	<DashContainer />,
	document.getElementById('app')
);
