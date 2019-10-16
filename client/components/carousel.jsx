import React from 'react';

function CarouselHeader() {
  return (
    <div id="carouselExampleIndicators" className="carousel carousel-fade slide w-100" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner mh-100">
        <div className="carousel-item active backgroundImage" style={{ backgroundImage: 'url("https://scene360.com/wp-content/uploads/2015/11/american-ghoul-06.jpg")', backgroundPosition: '50% 90%' }}>
        </div>
        <div className="carousel-item backgroundImage" style={{ backgroundImage: 'url("https://i.etsystatic.com/10351384/r/il/6619f6/1594264668/il_1588xN.1594264668_n8rq.jpg")', backgroundPosition: '50% 20%' }}>
        </div>
        <div className="carousel-item backgroundImage" style={{ backgroundImage: 'url("https://www.darkbeautymag.com/wp-content/uploads/2014/02/Pages-from-ISSUE-29-Print-Full-5-1.jpg")', backgroundPosition: '50% 20%' }}>
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
