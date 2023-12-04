import React from "react";
import { IconPropsType, themeColor } from "../../../features/common";

export const IconSuitcase: React.FC<IconPropsType> = ({ size = "60" }) => {
  return (
    <svg
      id="Flat"
      width={size}
      height={size}
      fill={themeColor.primary}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path d="M216.00781,64H176V56a24.0275,24.0275,0,0,0-24-24H104A24.0275,24.0275,0,0,0,80,56v8H40.00781a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216.00781,64ZM96,56a8.00917,8.00917,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8H96Zm64,24V208H96V80ZM40.00781,80H80V208H40.00781Zm176,128H176V80h40.00781l.01026,127.99951Z"></path>
    </svg>
  );
};
