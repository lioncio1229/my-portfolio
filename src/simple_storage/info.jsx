import React, { Component } from "react";

/**
 *
 * @param {brand, type, price, manufacturer, onProductDelete} param0
 * @returns
 */

class Info extends Component {
  handleProductDelete = (product) => {
    const { onProductDelete } = this.props;
    if (!onProductDelete) return;
    onProductDelete(product);
  };

  toggleOnOff(selectedProduct)
  {
      return selectedProduct.id >= 0?'initial':'none';
  }

  render() {
    const { selectedProduct } = this.props;
    const { brand, type, price, manufacturer } = selectedProduct;
    return (
      <React.Fragment>
        <div className="container-title">INFO</div>

        <div style={{ display: this.toggleOnOff(selectedProduct)}}>
          <div className="grid-container">
            <div className="key">Brand</div>
            <div className="value">{brand}</div>

            <div className="key">Product Type</div>
            <div className="value">{type}</div>

            <div className="key">price</div>
            <div className="value">{price}</div>

            <div className="key">manufacturer</div>
            <div className="value">{manufacturer}</div>
          </div>

          <div style={{ display: "block", textAlign: "center" }}>
            <button onClick={() => this.handleProductDelete(selectedProduct)}>
              Remove
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
