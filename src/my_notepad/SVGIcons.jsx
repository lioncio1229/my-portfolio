import { useRef } from "react";

export function PlusIcon({ width, height, defaultColor, hoverColor }) {
  const iconRef = useRef();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height)}
      viewBox="0 0 59.759 59.759"
      onMouseOver={() => {
        iconRef.current.style.fill = hoverColor;
      }}
      onMouseLeave={() => {
        iconRef.current.style.fill = defaultColor;
      }}
    >
      <path
        id="Icon_metro-plus"
        data-name="PlusIcon"
        d="M60.462,24.338H39.92V3.8a1.868,1.868,0,0,0-1.867-1.867h-11.2A1.868,1.868,0,0,0,24.98,3.8V24.338H4.438a1.868,1.868,0,0,0-1.867,1.867v11.2a1.868,1.868,0,0,0,1.867,1.867H24.98V59.82a1.868,1.868,0,0,0,1.867,1.867h11.2A1.868,1.868,0,0,0,39.92,59.82V39.278H60.462A1.868,1.868,0,0,0,62.33,37.41v-11.2A1.868,1.868,0,0,0,60.462,24.338Z"
        transform="translate(-2.571 -1.928)"
        fill={defaultColor}
        ref={iconRef}
      />
    </svg>
  );
}

export function DeleteIcon({ width, height, defaultColor, hoverColor }) {
  const iconRef = useRef();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height)}
      viewBox="0 0 40.356 51.886"
      onMouseOver={() => {
        iconRef.current.style.fill = hoverColor;
      }}
      onMouseLeave={() => {
        iconRef.current.style.fill = defaultColor;
      }}
    >
      <path
        id="Icon_material-delete"
        data-name="Icon material-delete"
        d="M10.383,50.621a5.782,5.782,0,0,0,5.765,5.765H39.208a5.782,5.782,0,0,0,5.765-5.765V16.03H10.383ZM47.856,7.383H37.767L34.884,4.5H20.472L17.589,7.383H7.5v5.765H47.856Z"
        transform="translate(-7.5 -4.5)"
        fill={defaultColor}
        ref={iconRef}
      />
    </svg>
  );
}

export function TextFileIcon({ width, height, defaultColor, hoverColor }) {
  const iconRef = useRef();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height)}
      onMouseOver={() => {
        iconRef.current.style.fill = hoverColor;
      }}
      onMouseLeave={() => {
        iconRef.current.style.fill = defaultColor;
      }}
      viewBox="0 0 40.828 46.66"
    >
      <path
        id="Icon_metro-file-text"
        data-name="Icon metro-file-text"
        d="M43.4,12.366a41.323,41.323,0,0,0-3.972-4.543,41.327,41.327,0,0,0-4.543-3.972c-2.35-1.723-3.49-1.923-4.143-1.923H8.144A3.649,3.649,0,0,0,4.5,5.573V44.943a3.649,3.649,0,0,0,3.645,3.645H41.681a3.649,3.649,0,0,0,3.645-3.645V16.509c0-.653-.2-1.793-1.923-4.143ZM37.369,9.885a39.773,39.773,0,0,1,3.307,3.708H33.661V6.578a39.732,39.732,0,0,1,3.708,3.307ZM42.41,44.943a.739.739,0,0,1-.729.729H8.144a.739.739,0,0,1-.729-.729V5.573a.739.739,0,0,1,.729-.729h22.6V15.051A1.458,1.458,0,0,0,32.2,16.509H42.41Zm-7.291-5.1H14.706a1.458,1.458,0,1,1,0-2.916H35.119a1.458,1.458,0,0,1,0,2.916Zm0-5.833H14.706a1.458,1.458,0,1,1,0-2.916H35.119a1.458,1.458,0,0,1,0,2.916Zm0-5.833H14.706a1.458,1.458,0,1,1,0-2.916H35.119a1.458,1.458,0,0,1,0,2.916Z"
        transform="translate(-4.499 -1.928)"
        fill={defaultColor}
        ref={iconRef}
      />
    </svg>
  );
}
