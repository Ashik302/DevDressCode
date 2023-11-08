import React, { use, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const Sweater = ({ data }) => {
  const[main, setMain] = useState(data.colors[2].images[0])
  const displayImage = (image) => {
    setMain(image)
  }
  return (
    <div className='container'>
      <div className="left">
        <h1 className='title'>{data.category}
        </h1>
        <hr />
        <br/>
        <p className='desc'>{data.desc}</p>
        <br/>
        <button className='btn btn-primary add'>Add to Cart</button>
        <br/>
        <button className='btn btn-danger add'>Buy Now</button>
      </div>
      <hr />
      <br />
      <div className="colors">
        <Carousel slide={false} controls={false}>
          {data.colors.map((color, colorIndex) => (
            <Carousel.Item key={colorIndex}>
              <h2 className='name'>{color.name}</h2>
              <div className='imageContainer'>
                  <div className="main-image">
                    <Image
                      src={`./${main}`}
                      alt='image '
                      height={250}
                      width={250}
                    />
                  </div>
                  <div className='normal'>
                  {color.images.map((image, index) => (
                      <Image
                        src={`./${image}`}
                        key={index} 
                        alt={`${color.name} Image`}
                        width={90}
                        height={50}
                        className='justify-flex'
                        onClick={()=>displayImage(image)}
                      />
                      ))}
                      </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Sweater;
