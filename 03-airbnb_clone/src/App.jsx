import { useState } from 'react';
import 'fs';
import './App.css';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

// database
import cardList from '../database/dataLoader';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-container'>
        {cardList.map((item) => 
        <Card
          key={item._id}
          name={item.name} 
          profile_url={item.profile_url}
          title={item.title}
          price={item.price}
          rating={item.rating}
          reviewCount={item.reviewCount}
          location={item.location}
          />)}
        </section>
        <section className='extraspace'></section>
    </div>
  )
}

export default App
