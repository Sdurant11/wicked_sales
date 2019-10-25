import React from 'react';

function ProductListItem(props) {
  let price = props.price;
  price = '$' + (price / 100).toFixed(2);
  const productImage = props.image;
  const styleObj = {
    height: '100%',
    backgroundImage: `url(${productImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overFlow: 'hidden'
  };
  return (
    <div className="card mb-5 mx-auto d-flex itemCard">
      <div className="rounded-0" style={ styleObj }></div>
      <div className="overlay">
        <div className="cardText">
          <div>{props.name}</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
