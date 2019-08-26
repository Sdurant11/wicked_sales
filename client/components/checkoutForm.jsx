import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    var customerInfo = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.setState(
      {
        name: '',
        creditCard: '',
        shippingAddress: ''
      }
    );
    this.props.onSubmit(customerInfo);
    this.props.view('catalog', {});
  }

  render() {
    return (
      <form className="p-4">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" className="form-control" name="name" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label>Credit Card Number: </label>
          <input type="text" className="form-control" name="creditCard" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label>Shipping Address</label>
          <textarea className="form-control" rows="3" name="shippingAddress" onChange={this.handleChange} required></textarea>
        </div>
        <button type="button" className="btn btn-outline-secondary float-left"
          onClick={() => { this.props.view('catalog', {}); }}>
            Continue Shopping
        </button>
        <button type="submit" className="btn btn-danger btn-lg float-right"
          onSubmit={this.handleSubmit}>
            Place Order
        </button>
      </form>
    );
  }

}
