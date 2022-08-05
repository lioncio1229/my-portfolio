import React, { useRef } from "react";

const buttonStyles = {
  display: "flex",
  flexOrientation: "row",
  justifyContent: "center",
};

/**
 *
 * @param {onAddClick} param0
 * @returns
 */
const AddItem = ({ onAddClick }) => {
  const brandInput = useRef();
  const typeInput = useRef();
  const priceInput = useRef();
  const manufacturerInput = useRef();

  const handleOnAddClick = () => {
    if (!onAddClick) return;

    const brand = brandInput.current.value;
    const type = typeInput.current.value;
    const price = priceInput.current.value;
    const manufacturer = manufacturerInput.current.value;

    if ((brand === "" || type === "" || price === "", manufacturer === ""))
      return;

    onAddClick({
      brand,
      type,
      price,
      manufacturer,
    });
  };

  const handleOnClearClick = () => {
    brandInput.current.value = null;
    typeInput.current.value = null;
    priceInput.current.value = null;
    manufacturerInput.current.value = null;
  };

  return (
    <React.Fragment>
      <div className="container-title">ADD ITEM</div>
      <div>
        <div style={{ lineHeight: "40px" }} className="grid-container">
          <div>Brand</div>
          <div>
            <input
              ref={brandInput}
              className="inputfield"
              id="brand"
              type="text"
            />
          </div>

          <div>Product Type</div>
          <div>
            <input
              ref={typeInput}
              className="inputfield"
              id="type"
              type="text"
            />
          </div>

          <div>Price</div>
          <div>
            <input
              ref={priceInput}
              className="inputfield"
              id="price"
              type="number"
            />
          </div>

          <div>Manufacturer</div>
          <div>
            <input
              ref={manufacturerInput}
              className="inputfield"
              id="manufacturer"
              type="text"
            />
          </div>
        </div>
        <div style={buttonStyles}>
          <button onClick={handleOnAddClick} style={{ marginLeft: "5px" }}>
            ADD
          </button>
          <button onClick={handleOnClearClick} style={{ marginLeft: "5px" }}>
            CLEAR
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddItem;
