import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Logic from '../Logic';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Logic renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logic />, div);
  ReactDOM.unmountComponentAtNode(div);
});