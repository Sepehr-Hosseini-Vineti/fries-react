import React from 'react';
import { mount } from 'enzyme';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '../rootReducer';

function render(
  ui,
  {
    initialState = {},
    store = configureStore({ reducer, preloadedState: initialState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return mount(ui, { wrappingComponent: Wrapper, ...renderOptions });
}

// re-export everything
export * from 'enzyme';
// override render method
export { render };
