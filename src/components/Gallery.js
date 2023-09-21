import React, { useState } from 'react';
import data from '../gallery.json';
import './app.css';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className='gallery'>
        <div className='input-box'>
          <input 
            type='search' 
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='photo-container'>
          {/* photo's here */}
          {data.filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if ()
          }).map((value, key) => {
            return (
              <div className='photo-bag' key={value.id}>
                <div className='photo'>
                  <img src={value.image} alt=''/>
                </div>
                <button>{value.tag}</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery