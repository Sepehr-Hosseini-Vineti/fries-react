import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['"Comfortaa"', '-apple-system', 'BlinkMacSystemFont'].join(','),
	},
});

function Context({ children }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</Provider>
	);
}

export default Context;
