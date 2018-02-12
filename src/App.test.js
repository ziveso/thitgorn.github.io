import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar/Navbar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
})
