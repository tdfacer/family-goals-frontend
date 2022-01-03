import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
import FamilyGoalsComponent from './GoalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the family goals app.
        </p>
        <div>
          <FamilyGoalsComponent/>
    {
          // <MyComponent obj={{subtitle: "sub", title: "tit"}}/>
    }
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
