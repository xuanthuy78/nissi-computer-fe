import { Flex, Typography, Space, Divider } from "antd";
import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";

const SubjectSection = () => {
  return (
    <React.Fragment>
      <Flex align="center" justify="space-between">
        <Typography.Text className="font-bold text-xl p-2 bg-primary rounded-t-md ">
          Máy tính xách tay
        </Typography.Text>
        <Space size="middle" className="cursor-pointer">
          <Typography.Text className="font-bold hover:text-primary">
            Laptop HP
          </Typography.Text>
          <Typography.Text className="font-bold hover:text-primary">
            Laptop Dell
          </Typography.Text>
          <Typography.Text className="font-bold text-primary hover:text-primary-fa">
            xem tất cả
            <DoubleRightOutlined className="text-xs" />
          </Typography.Text>
        </Space>
      </Flex>
      <Divider className="m-0 !border-primary" />
    </React.Fragment>
  );
};

export default SubjectSection;
