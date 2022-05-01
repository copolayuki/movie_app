// import logo from './logo.svg';
// import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
  };

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading ...' : 'Ready to see'}</div>;
  }
}

export default App;
