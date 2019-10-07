import React from 'react';

function ProductListItem(props) {
  var price = props.price;
  price = '$' + (price / 100).toFixed(2);
  return (
    <div className="card mb-5 mx-auto d-flex itemCard">
      <img className="card-img rounded-0" style={{ height: '100%' }} src={props.image} alt="Card image cap"></img>
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
