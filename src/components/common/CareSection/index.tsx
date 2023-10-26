import { Flex, Space, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import React from "react";
import { CareTypes } from "../../../features/common";

export type PropsType = {
  data: CareTypes;
};

const CareSection: React.FC<PropsType> = ({ data }) => {
  return (
    <Flex align="center">
      <Space size={0} className="text-red-500 text-4xl">
        {data.icon}
      </Space>
      <Space size={0} direction="vertical" className="ml-3">
        <Typography.Text className="font-bold uppercase">
          {data.title}
        </Typography.Text>
        <Typography.Text>{data.describe}</Typography.Text>
      </Space>
    </Flex>
  );
};

export default CareSection;
