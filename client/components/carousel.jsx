import React from 'react';

function CarouselHeader() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://i.etsystatic.com/5961957/r/il/682e90/1138774732/il_794xN.1138774732_kjj3.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://i.etsystatic.com/5961957/r/il/8df99f/1850225009/il_1588xN.1850225009_abg8.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://i.etsystatic.com/5961957/r/il/3b96dc/1456545957/il_794xN.1456545957_6g10.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CarouselHeader;
