import React, { Component } from "react";

/**
 *  Properties:
 *      * selectedProduct:
 *          type - product object
 *      * products:
 *          type - list of product objects
 *      * onProductClick
 *          type - callback function,
 *          parameter: product
 *
 */
class Products extends Component {
  state = {
    id: -1,
  };

  handleProductClick = (product) => {
    const { onProductClick } = this.props;
    if (!onProductClick) return;
    onProductClick(product);
    this.setState({ id: product.id });
  };

  updateToggleDesign(id) {
    let toggleClass = "toggle-display toggle-";
    const { selectedProduct } = this.props;
    return (toggleClass +=
      selectedProduct && id === selectedProduct.id ? "primary" : "secondary");
  }

  render() {
    let { products } = this.props;
    if (!products) products = [];
    return (
      <React.Fragment>
        <div className="container-title">PRODUCTS</div>

        <div style={{ overflow: "auto", height: "75vh" }}>
          {products.map((product) => (
            <div
              onClick={() => this.handleProductClick(product)}
              key={product.id}
              className="container-item"
            >
              <div className={this.updateToggleDesign(product.id)}></div>
              {product.brand}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
