import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
	name: "product",
	initialState: {
		popular: {
			isLoading: false,
			list: []
		},
		all: {
			isLoading: false,
			list: []
		},
	},
	extraReducers: {
		[fetchPopular.pending]: (state) => state.popular.isLoading = true,
		[fetchPopular.fulfilled]
	}
})