import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import Dash from './components/Dash.jsx';

render(
	<Dash />,
	document.getElementById('app')
);
