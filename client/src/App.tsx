import React from 'react';
import logo from './logo.svg';
import './App.css';

import StatefulHello from './components/statefulHello';
// import HomepageLayout from './components/semantic';
import Users from './components/express_api_users/express_api_users';
import PlaceholderUsers from './components/placeholder_api_users/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StatefulHello name="World" enthusiasmLevel={0} />
        <Users userId={1} default={0} />
        <PlaceholderUsers userId={1} default={0} />
      </header>
      {/* <HomepageLayout /> */}
    </div>
  );
}

export default App;
