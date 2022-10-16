import { useState } from 'react';
import './App.css';

// loading assets
import comstech from '../public/COMSTECH-LOGO.png';

// loading database
import data from '../database/dataLoader';

// loading components
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import TextSection from './components/TextSection';

function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar 
        comstechlogo = {comstech}
      />
      {data.map((item)=>(
        <div className='card-section-container'>
          <section className="card-section">
            <ImageSection imageUrl={item.imageUrl}/>
            <TextSection 
              location={item.location}
              googleMapsUrl={item.googleMapsUrl}
              title={item.title}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              />
          </section>
          <hr/>
      </div>
      ) )}
    
    </div>
  )
}

export default App

