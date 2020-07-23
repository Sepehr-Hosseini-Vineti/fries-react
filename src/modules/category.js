import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchCategories = createAsyncThunk(
	'category/fetchCategories',
	async thunkApi => {
		const {
			data: { categories },
		} = await api.fetchCategories();

		return { data: categories };
	}
);

export default createSlice({
	name: 'category',
	initialState: {
		isLoading: false,
		list: [],
		selected: null,
	},

	reducers: {},

	extraReducers: {
		[fetchCategories.pending]: (state, action) => {
			state.isLoading = true;
		},
		[fetchCategories.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.list = action.payload.data;
		},
		[fetchCategories.rejected]: (state, action) => {
			state.isLoading = false;
		},
	},
});
