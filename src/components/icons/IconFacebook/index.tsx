import React from "react";
import { IconPropsType } from "../../../features/common";

export const IconFacebook: React.FC<IconPropsType> = ({ size = "35" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
    >
      <g fill="#1677ff">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"
          fill="#1677ff"
        ></path>
      </g>
    </svg>
  );
};
