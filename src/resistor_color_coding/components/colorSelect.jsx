import { useContext, useEffect, useRef } from "react";
import ColorItem from "./colorItem";
import { BandContext } from "../context/color_coding_provider";
import { colorcodeTable } from "../colorCodes";

export default function ColorSelect({ bandName, handleCloseColorSelect}) {
  const [state, dispatch] = useContext(BandContext);
  const listColorRef = useRef(null);

  const handleColorClick = (e, color) => {
    e.stopPropagation();
    dispatch({ bandName, color });
    handleCloseColorSelect();
  };

  const handleClickOutside = (e) => {
    if(!listColorRef.current.contains(e.target))
      handleCloseColorSelect();
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  });

  return (
    <div ref={listColorRef} className="color-select flex-container-column">
      {colorcodeTable.map(
        (colorCode) =>
          colorCode[bandName] !== undefined && (
            <ColorItem key={colorCode['name']} bandName={bandName} colorCode={colorCode} handleColorClick={handleColorClick}/>
          )
      )}
    </div>
  );
}
