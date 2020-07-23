import React from 'react';
import './App.css';

import Context from './context';

import Hero from './components/Hero';
import CategoriesSlider from './components/CategoriesSlider';
import ProductsSlider from './components/ProductsSlider';

function App() {
	return (
		<Context>
			<div className="App">
				<Hero />
				<CategoriesSlider />
				<ProductsSlider />
			</div>
		</Context>
	);
}

export default App;
