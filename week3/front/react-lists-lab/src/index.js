import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/Book.css'
import RecipeList from './Recipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RecipeList />
  </React.StrictMode>
);