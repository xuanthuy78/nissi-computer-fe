import React from "react";
import { IconPropsType } from "../../../features/common";

export const IconDelete: React.FC<IconPropsType> = ({ size = "24" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19 19M5 19L19 5"
        stroke="#888686"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};
