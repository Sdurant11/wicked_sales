import React from 'react';
import ProductListItem from './product-list-item';
import { Link } from 'react-router-dom';

export default class AccessoriesList extends React.Component {

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
      .then(res => { return res.json(); })
      .then(res => { this.setState({ products: res }); });
  }

  render() {
    const accessoriesItems = this.state.products.filter(item => item.productType === 'accessories');
    const accessoriesCards = accessoriesItems.map(product =>
      <Link to={`/products/${product.id}`} key={product.id}
        className='col-md-4 d-flex align-items-stretch'>
        <ProductListItem
          name={product.name}
          price={product.price}
          image={product.image}
          text={product.shortDescription}
        />
      </Link>
    );

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h2 className="mx-auto">Accessories</h2>
          </div>
          <div className='row mt-5'>
            {accessoriesCards}
          </div>
        </div>
      </React.Fragment>
    );
  }

}
