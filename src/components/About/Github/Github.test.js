import React from 'react';
import ReactDOM from 'react-dom';
import Github from './Github';

it('github component renders without crashing', () => {
  const testData = {
    username : 'test',
    follower : 99,
    following: 75,
    public_repos: 175
  }
  const div = document.createElement('div');
  ReactDOM.render(<Github data={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
