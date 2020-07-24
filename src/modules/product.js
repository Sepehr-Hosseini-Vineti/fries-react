import { merge, isEmpty } from 'lodash';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchPopular = createAsyncThunk(
	'product/fetchPopular',
	async (_payload, thunkAPI) => {
		const selectedCategory = thunkAPI.getState().category.selectedCategoryId;

		const params = {};
		if (selectedCategory) merge(params, { categoryIds: [selectedCategory] });

		const {
			data: { products },
		} = await api.fetchPopularProducts(params);

		return { list: products };
	}
);

export default createSlice({
	name: 'product',
	initialState: {
		popular: {
			isLoading: false,
			list: [],
		},
		all: {
			isLoading: false,
			list: [],
		},
	},
	extraReducers: {
		[fetchPopular.pending]: state => {
			state.popular.isLoading = true;
		},
		[fetchPopular.fulfilled]: (state, action) => {
			state.popular.isLoading = false;
			state.popular.list = action.payload.list;
		},
		[fetchPopular.rejected]: (state, action) => {
			console.log(`action: `, action);
			state.popular.isLoading = false;
		},
	},
});
