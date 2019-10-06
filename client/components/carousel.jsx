import React from 'react';

function CarouselHeader() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://i.etsystatic.com/5961957/r/il/f85ed2/1786958028/il_794xN.1786958028_izcu.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
    </div>
  );
}

export default CarouselHeader;
