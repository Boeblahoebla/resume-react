// Imports
//////////

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';


// Tests
////////

// Render of app component
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
