import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/ShowCase.css';
import ShowcaseGrid from './js/ShowcaseGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowcaseGrid />
  </React.StrictMode>
);