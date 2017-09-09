import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Styles
import './styles/base.scss';

// Components
import Layout from './components/Layout.jsx';
import Dash from './components/Dash.jsx';

// Reducer
import reducer from './reducers';

// Actions
import { actAddIncomeItem } from './actions/Dash.js';

// Make store
let store = createStore(reducer);

// Fetch data
import incomeData from './mock-data/income.json';
for (let i = 0;i < incomeData.length;i++) {
	store.dispatch(actAddIncomeItem(incomeData[i]));
}

render(
	<Provider store={store}>
		<Layout>
			<Dash />
		</Layout>
	</Provider>,
	document.getElementById('app')
);
