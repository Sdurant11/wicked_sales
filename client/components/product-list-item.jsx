import React from 'react';

function ProductListItem(props) {
  var price = props.price;
  price = '$' + (price / 100).toFixed(2);
  const productImage = props.image;
  const styleObj = { height: '100%', backgroundImage: { productImage }, backgroundSize: 'contain' };
  return (
    <div className="card mb-5 mx-auto d-flex itemCard itemCardFrame">
      <div className="card-img rounded-0" style={ styleObj }></div>
      <div className="overlay">
        <div className="cardText">
          <div>{props.name}</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
    // <div className="card mb-5 mx-auto d-flex itemCard shadow">
    //   <img className="card-img rounded-0" style={{ height: '100%' }} src={props.image} alt="Card image cap"></img>
    //   <div className="overlay">
    //     <div className="cardText">
    //       <div>{props.name}</div>
    //       <div>{price}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductListItem;
