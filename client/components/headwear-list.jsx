import React from 'react';
import ProductListItem from './product-list-item';

export default class HeadWearList extends React.Component {

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
    const headWearItems = this.state.products.filter(item => item.productType === 'headWear');
    const headWearCards = headWearItems.map(product =>
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
        <h2 className="mx-auto" style={{ width: '100%' }}>Headwear</h2>
        <div className="container">
          <div className='row mt-5'>
            {headWearCards}
          </div>
        </div>
      </React.Fragment>
    );
  }

}
