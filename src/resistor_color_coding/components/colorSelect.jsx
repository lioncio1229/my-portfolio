import { useContext, useEffect, useRef } from "react";
import { BandContext } from "../context/color_coding_provider";
import { colorcodeTable } from "../colorCodes";
import abbreviateNumber from "../utils/abbreviateNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

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

  const displayValue = (colorCode, bandName) =>
  {
    switch (bandName) {
      case 'multiplier':
        return 'x ' + abbreviateNumber(colorCode[bandName]) + " " + colorCode["color"];
      case 'tolerance':
        return '± '+(colorCode[bandName] * 100) + "% " + colorCode["color"];
      default:
        return colorCode[bandName] + " " + colorCode["color"]
    }
  }

  return (
    <div ref={listColorRef} className="color-select flex-container-column">
      {colorcodeTable.map(
        (colorCode) =>
          colorCode[bandName] !== undefined && (
            <div
              key={colorCode["color"]}
              onClick={(e) => handleColorClick(e, colorCode["color"])}
              className={"color-item selection " + colorCode["color"]}
            >
              <FontAwesomeIcon icon={faCaretRight} className="caret-right"/>
              
              {displayValue(colorCode, bandName)}
            </div>
          )
      )}
    </div>
  );
}
