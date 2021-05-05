import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import WelcomeForm from './components/WelcomeForm';
import Card from './components/Card';
import Client from './components/Client';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HomeBanner />
    <WelcomeForm />
    <Card />
    <Client />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
