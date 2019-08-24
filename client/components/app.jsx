import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.view.name === 'catalog' ? (
          <ProductList view={this.setView} />
        ) : (
          <ProductDetails view={this.setView} params={this.state.view.params}/>
        )}
      </React.Fragment>
    );
  }
}
