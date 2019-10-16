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
      .then(res => res.find(entry => entry['id'] === parseInt(this.props.match.params.id)))
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
      return (
        <React.Fragment>
          <div className="container d-flex itemDetailsContainer pb-5">
            <div>
              <img className="itemDetailsImage" src={image} alt="image of product" />
            </div>
            <div className="mx-2 mt-3 itemDetailsInfoContainer">
              <h2>{name}</h2>
              <div className="detailsText">{price}</div>
              <div className="detailsText">{shortDescription}</div>
              <button type="button" className="btn btn-success my-3" onClick={() => { this.context.addToCart(productInfoObj); }}>
                Add to Cart
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

}

ProductDetails.contextType = AppContext;
