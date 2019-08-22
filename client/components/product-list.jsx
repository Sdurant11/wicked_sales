import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(res => {
        var allProducts = res;
        this.setState({ products: allProducts });
      });
  }

  render() {

    var newItems = this.state.products.map(product =>
      <div key={product.id} className='col-md-4 d-flex align-items-stretch'>
        <ProductListItem
          name={product.name}
          price={product.price}
          image={product.image}
          text={product.shortDescription}
        />
      </div>
    );
    return (
      <div className="container">
        <div className= 'row'>
          {newItems}
        </div>
      </div>
    );
  }

}
