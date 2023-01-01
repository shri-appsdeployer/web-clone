import React from 'react';
import './Gallery.scss';
import carousel1 from '../../images/carousel1.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';


const Gallery = () => {
  return (
    <div className='gallery-wrapper' id='gallery'>
        <div className="gallery">
            <h2>Gallery</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, ex?</p>
            <div className="gallery-grid">
                <div className='gallery-grid-item item1'><img src={carousel2} alt="" /></div>
                <div className='gallery-grid-item item2'><img src={carousel1} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel1} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel1} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel3} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel1} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel3} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel1} alt="" /></div>
                <div className='gallery-grid-item'><img src={carousel3} alt="" /></div>
            </div>

        </div>
    </div>
  )
}

export default Gallery;