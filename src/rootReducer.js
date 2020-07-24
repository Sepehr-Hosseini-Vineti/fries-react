import { combineReducers } from 'redux';

import category from './modules/category';
import product from './modules/product';

export default combineReducers({
	category: category.reducer,
	product: product.reducer,
});
