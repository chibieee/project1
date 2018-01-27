import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import './index.css';

  class App extends React.Component {
    render() {
      return (
        <div className="main-container">
          <h1>Hello World!</h1>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  