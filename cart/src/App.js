import React, { Component } from "react";

class App extends Component {
constructor(prop) {
  super(prop);
  this.state = {
    items: []
  }
}

  componentDidMount() {
    window.addEventListener("addItem", this.handleAddItem);
  }

  componentWillUnmount() {
    window.removeEventListener("addItem", this.handleAddItem);
  }

  handleAddItem = ({detail: item}) => {
    console.log("added item", item);
    this.setState((state, props) => {
      return {
        items: [...state.items, item]
      }
    })
  };

  renderItem = (item) => {
    return (
      <div>{item.product}: $ {item.price}</div>
    )
  }

  render() {
    return (
      <sidebar>
        <h2>Cart</h2>
        {this.state.items.length === 0 
          ?  <p>Your cart is empty</p>
          : <div>{this.state.items.map(this.renderItem)}</div>}
      </sidebar>
    );
  }
}

export default App;
