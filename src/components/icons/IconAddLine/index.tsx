import React from "react";
import { IconPropsType } from "../../../features/common";

export const IconAddLine: React.FC<IconPropsType> = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
    >
      <g fill="#9e9e9e">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="#9e9e9e"></path>
      </g>
    </svg>
  );
};
