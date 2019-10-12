import React from 'react';
import ProductListItem from './product-list-item';
import CarouselHeader from './carousel.jsx';

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
      .then(res => { return res.json(); })
      .then(res => {
        this.setState({ products: res });
      });
  }

  render() {
    var newItems = this.state.products.map(product =>
      <div onClick={() => {
        this.props.view('description', { id: product.id });
      }} key={product.id} className='col-md-4 d-flex align-items-stretch'>
        <ProductListItem
          name={product.name}
          price={product.price}
          image={product.image}
          text={product.shortDescription}
        />
      </div>
    );
    return (
      <React.Fragment>
        <CarouselHeader />
        <div className="container">
          <div className='row mt-5'>
            <h2 className="mx-auto">Featured Items</h2>
          </div>
          <div className= 'row mt-5'>
            {newItems}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
