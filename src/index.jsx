import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Styles
import './styles/base.scss';

// Components
import Layout from './components/Layout.jsx';
import DashContainer from './containers/DashContainer.jsx';

// Reducer
import reducer from './reducers';

// Actions
import { actAddIncomeItems } from './actions/Dash.js';

// Make store
let store = createStore(reducer);

// Fetch data
import incomeData from './mock-data/income.json';
store.dispatch(actAddIncomeItems(incomeData));

render(
	<Provider store={store}>
		<Layout>
			<DashContainer />
		</Layout>
	</Provider>,
	document.getElementById('app')
);
