import React from 'react';
import ReactDOM from 'react-dom';
import Me from './Me';

it('Myself component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Me />, div);
  ReactDOM.unmountComponentAtNode(div);
});
