import { createStore } from 'redux';

import { reducer } from './reducers';

let preloadedState = {
	products: [],
	cart: [],
	cartOpen: false,
	categories: [],
	currentCategory: '',
};

const store = createStore( reducer, preloadedState );

export default store;