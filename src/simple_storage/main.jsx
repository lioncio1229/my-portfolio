import React, { Component } from "react";
import "./simple_storage.css";
import Products from "./products";
import Info from "./info";
import AddItem from "./add_item";

class Main extends Component {
  state = {
    selectedProduct: {},
    products: [
      {
        brand: "Kingston",
        type: "Memory",
        price: 1200,
        manufacturer: "Kingston Corporation",
      },
      {
        brand: "HD Monitor",
        type: "Computer Monitor",
        price: 2000,
        manufacturer: "HD Corporation",
      },
      {
        brand: "LG",
        type: "Computer Monitor",
        price: 2200,
        manufacturer: "LG Corporation",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.recalculateProductIndexes();
  }

  handleProductDelete = (product) => {
    const products = this.state.products;
    const id = products.find(item => item.id === product.id).id;
    products.splice(id, 1);

    this.recalculateProductIndexes();
    this.setState({ products });
    
    let newProduct = products.find(item => item.id === id);
    let newId = -1;

    if (newProduct) newId = id;
    else{
      const lastId = products.length - 1;
      if (lastId == -1) {
        this.setState({selectedProduct : {}});
        return;
      }
      newId = products[lastId].id;
    }

    if (newId != -1) this.handleProductClick(products[newId]);
  };

  handleProductClick = (product) => {
    const selectedProduct = this.state.selectedProduct;
    selectedProduct.id = product.id;
    selectedProduct.brand = product.brand;
    selectedProduct.type = product.type;
    selectedProduct.price = product.price;
    selectedProduct.manufacturer = product.manufacturer;
    this.setState({ selectedProduct });
  };

  recalculateProductIndexes() {
    const products = this.state.products;
    const len = products.length;
    for (let i = 0; i < len; i++) {
      products[i].id = i;
    }
  }

  handleOnAddClick = (product) => 
  {
      const products = this.state.products;
      products.push(product);
      this.recalculateProductIndexes();
      this.setState({products});
  }

  render() {
    const {selectedProduct, products} = this.state;
    return (
      <React.Fragment>
        <nav>
          <div className="brand-name">Simple Storage</div>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> White Paper </a>
            </li>
            <li>
              <button>CONNECT</button>
            </li>
          </ul>
        </nav>

        <div className="content">
          <div className="content-item">
            <Products
              selectedProduct={selectedProduct}
              products={products}
              onProductClick={this.handleProductClick}
            />
          </div>
          <div className="content-item">
            <Info
              selectedProduct={selectedProduct}
              onProductDelete={this.handleProductDelete}
            />
          </div>
          <div className="content-item">
            <AddItem onAddClick={this.handleOnAddClick}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
