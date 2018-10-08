import React from 'react';
import ReactDOM from 'react-dom';
//create component

const App = () => {
    return <div>Hi!</div>;
}

// take generated html and put it on page

ReactDOM.render(<App />, document.querySelector('.container'));