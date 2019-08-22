import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(res => res.json())
      .then(res => {
        var productDetails = res;
        this.setState({ product: productDetails });
      });

  }

  render() {
    if (!this.state.product) {
      return null;
    } else {
      var productInfoObj = this.state.product;
      var name = productInfoObj.name;
      var price = '$' + (productInfoObj.price / 100).toFixed(2);
      var image = productInfoObj.image;
      var shortDescription = productInfoObj.shortDescription;
      var longDescription = productInfoObj.longDescription;
      return (
        <React.Fragment>
          <h1>{name}</h1>
          <div>{price}</div>
          <img src={image} alt="image of product"/>
          <div>{shortDescription}</div>
          <div>{longDescription}</div>
        </React.Fragment>
      );
    }
  }

}
