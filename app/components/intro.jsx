"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <div className="intro">
      <div className="inner-container">
        <div className="lefts">
          <h1 style={{ color: 'blue', fontSize: '2rem', fontWeight: 'bold' }}>
            Discover the Perfect Attire for the Discerning Developer
          </h1>
          <p style={{ color: '#555', fontSize: '1.2rem' }}>
            Elevate your coding journey with attire that resonates your coding passion.
          </p>
        </div>
        <div className="lefts">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Do you desire to showcase your passion for coding in your attire?
          </h2>
          <p style={{ color: 'blue', fontSize: '1.2rem' }}>
            <span style={{ fontWeight: 'bold' }}>
              <Typewriter
                words={['Python', 'JavaScript', 'Customization']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        <div className="image">
          <Carousel slide={false} controls={false}>
            <Carousel.Item>
              <Image src="./hodi2.png" height={200} width={200} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./hodi7.png" height={200} width={200} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./hodi9.png" height={200} width={200} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./swet.png" height={200} width={200} alt=''/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="./swet9.png" height={200} width={200} alt=''/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Intro;
