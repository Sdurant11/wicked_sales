import React from 'react';

function ProductListItem(props) {
  var price = props.price;
  price = '$' + (price / 100).toFixed(2);
  return (
    <div className="card mb-5 mx-auto d-flex itemCard" style={{ width: '250px', height: '400px', cursor: 'pointer' }}>
      <img className="card-img-top p-1" style={{ width: '100%', height: '50%' }} src={props.image} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
