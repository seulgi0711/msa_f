import React, { Component } from "react";

const fireAdd = (item) => {
  console.log(item);
  const event = new CustomEvent('addItem', {detail: item})
    console.log('dispatch event', item);
    window.dispatchEvent(event);
}

const productItemView = product => {
  const price = parseFloat((Math.random() * 100).toFixed(2));
  const addItem = () => {
    fireAdd({ product, price })
  }
  return (
    <li
      style={{
        padding: "30px",
        listStyle: "none",
        border: "1px solid #000",
        margin: "5px"
      }}
    >
      <b>{product}</b> <br />
      $ {(Math.random() * 100).toFixed(2)} <br />
      <button onClick={addItem}>Buy</button>
    </li>
  );
};

class App extends Component {
  render() {
    return (
      <section>
        <h2>Products</h2>
        <ul style={{ display: "flex", padding: "0" }}>
          {["Rice", "Beans", "Fries", "Steak"].map(productItemView)}
        </ul>
      </section>
    );
  }
}

export default App;
