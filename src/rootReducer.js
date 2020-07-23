import { combineReducers } from 'redux';
import category from './modules/category';

export default combineReducers({
	category: category.reducer,
});
