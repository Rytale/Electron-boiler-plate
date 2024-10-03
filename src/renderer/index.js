import React from 'react';
import ReactDOM from 'react-dom';
import './shared/styles/global.css';
import Header from './shared/components/Header';
import HomePage from './pages/Home/components/HomePage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);