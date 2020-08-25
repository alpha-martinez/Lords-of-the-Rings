import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Movie image="https://images-na.ssl-images-amazon.com/images/I/81SY6aD4yvL._AC_SY741_.jpg" title="The Fellowship of the Ring" hours="2" minutes="58"/>
    
      <Movie image="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-113524-a_480x480.jpg?v=1571439884" title="The Two Towers" hours="2" minutes="59" />
  
      <Movie image="https://lh3.googleusercontent.com/Z5wMaMeg3LC8ESgbyc5VIrP5IR2mIZrykCOfoclJHMWQVGzQsGVWWDOYC6JmGtRSWpc=w400-h600-rw" title="The Return of the King" hours="3" minutes="21" />
  
        
      </header>
    </div>
  );
}

export default App;
