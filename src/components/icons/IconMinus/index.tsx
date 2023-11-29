import React from "react";
import { IconPropsType } from "../../../features/common";

export const IconMinus: React.FC<IconPropsType> = ({ size = "20" }) => {
  return (
    <svg
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={size}
      width={size}
    >
      <path
        d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z"
        fill="#868383"
      ></path>
    </svg>
  );
};
