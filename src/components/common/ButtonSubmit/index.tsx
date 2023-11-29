import { Button } from "antd";
import React from "react";

const ButtonSubmit: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Button
      type="primary"
      className="w-full h-14 font-bold text-2xl uppercase bg-primary"
    >
      {title}
    </Button>
  );
};

export default ButtonSubmit;
