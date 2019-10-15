import React from 'react';
import AppContext from './context';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products.php?id={this.props.match.params.id}`)
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
          <div className="container">
            <div className="row">
              <button type="button" className="btn btn-success m-3"
                onClick={() => { this.props.view('catalog', {}); }}>
                Back to Catalog</button>
            </div>
            <div className="row">
              <div className="col-8">
                <img className="mw-100" src={image} alt="image of product" />
              </div>
              <div className="col-4">
                <h2>{name}</h2>
                <div className="detailsText">{price}</div>
                <div className="detailsText">{shortDescription}</div>
              </div>
            </div>
            <div className="row">
              <div className="m-3">{longDescription}</div>
            </div>
            <button type="button" className="btn btn-success" onClick={() => { this.context.addToCart(productInfoObj); }}>
              Add to Cart
            </button>
          </div>
        </React.Fragment>
      );
    }
  }

}

ProductDetails.contextType = AppContext;
