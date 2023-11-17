import React from "react";
import { Flex, Space, Typography } from "antd";
import { CareTypes, IconPropsType } from "../../../features/common";

export type PropsType = {
  data: CareTypes;
  Icon: React.FC<IconPropsType>;
  colorText?: boolean;
};

const CareSection: React.FC<PropsType> = ({
  data,
  Icon,
  colorText = false,
}) => {
  return (
    <Flex align="center">
      {Icon && (
        <Space size={0} className="text-4xl">
          <Icon />
        </Space>
      )}

      <Space size={0} direction="vertical" className="ml-3">
        {data?.title && (
          <Typography.Text
            className={`font-bold uppercase ${colorText ? "text-black" : ""}`}
          >
            {data.title}
          </Typography.Text>
        )}
        {data?.describe && <Typography.Text>{data.describe}</Typography.Text>}
      </Space>
    </Flex>
  );
};

export default CareSection;
