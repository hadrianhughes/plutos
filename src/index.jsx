import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/base.scss';

import Layout from './components/Layout.jsx';
import DashContainer from './containers/DashContainer.jsx';

import reducer from './reducers';

let store = createStore(reducer);

render(
	<Provider store={store}>
		<Layout>
			<DashContainer />
		</Layout>
	</Provider>,
	document.getElementById('app')
);
