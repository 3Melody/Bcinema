'use client';

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import Logo from '../public/image/logo.png';
import Profile from '../public/image/profile.png';
import MovieImage from '../public/image/MovieImage.png'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
   
  })

  const frontSize = {
    fontSize: '24px',
  };

 
  const backGround = {
    background:
      'linear-gradient(180deg, #18191D 0%, rgba(0, 0, 0, 0.00) 100%)',
    height: '160px',
    width: '100%',
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
   <div>
        <div className='position-relative'> 
            <Image src={MovieImage}/>
          <div style={backGround} className='position-absolute position-absolute top-0 start-50 translate-middle-x'>
            <div className="d-flex justify-content-between text-white align-items-center px-5 pt-3">
              <div>
                <Image src={Logo} />
              </div>
              <div className="d-flex">
                <div>
                    <h1
                      style={frontSize}
                      id="home"
                      className={`fw-bold ${activeTab === 'home' ? 'active' : ''}`}
                      onClick={() => handleTabClick('home')}
                    >
                      Home
                    </h1>
                    <div>
    
                    </div>
                </div>
                <h1
                  className={`ms-5 me-5 fw-bold ${
                    activeTab === 'movie' ? 'active' : ''
                  }`}
                  id="movie"
                  style={frontSize}
                  onClick={() => handleTabClick('movie')}
                >
                  Movie
                </h1>
                <h1
                  style={frontSize}
                  id="upcoming"
                  className={`fw-bold ${
                    activeTab === 'upcoming' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('upcoming')}
                >
                  Upcoming
                </h1>
              </div>
              <div>
                <Image src={Profile} />
              </div>
            </div>
          </div>
          <style jsx>{`
            .active {
              color: #FCCF34;
            }
          `}</style>
        </div>
   </div>
  );
}
