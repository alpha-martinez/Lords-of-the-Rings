import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Movie from './Movie'

ReactDOM.render(
  <React.StrictMode>
  <Movie image="https://images-na.ssl-images-amazon.com/images/I/81SY6aD4yvL._AC_SY741_.jpg" title="The Fellowship of the Ring" hours="2" minutes="58"/>
    
  <Movie image="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-113524-a_480x480.jpg?v=1571439884" title="The Two Towers" hours="2" minutes="59" />

  <Movie image="https://lh3.googleusercontent.com/Z5wMaMeg3LC8ESgbyc5VIrP5IR2mIZrykCOfoclJHMWQVGzQsGVWWDOYC6JmGtRSWpc=w400-h600-rw" title="The Return of the King" hours="3" minutes="21" />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
