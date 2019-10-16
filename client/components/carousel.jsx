import React from 'react';

function CarouselHeader() {
  return (
    <div id="carouselIndicators" className="carousel carousel-fade slide w-100" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner mh-100">
        <div className="carousel-item active backgroundImage" style={{ backgroundImage: 'url("https://scene360.com/wp-content/uploads/2015/11/american-ghoul-06.jpg")', backgroundPosition: '50% 90%' }}>
        </div>
        <div className="carousel-item backgroundImage" style={{ backgroundImage: 'url("https://i.etsystatic.com/10351384/r/il/6619f6/1594264668/il_1588xN.1594264668_n8rq.jpg")', backgroundPosition: '50% 20%' }}>
        </div>
        <div className="carousel-item backgroundImage" style={{ backgroundImage: 'url("https://i.etsystatic.com/19186398/r/il/ac8581/1802384229/il_fullxfull.1802384229_98eq.jpg")', backgroundPosition: '0% 20%' }}>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CarouselHeader;
