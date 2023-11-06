import { Flex, Typography, Space, Divider } from "antd";
import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { CategoriesType, CategoryTypes } from "../../../features/common";

export type PropsType = {
  categories: CategoriesType;
};
const SubjectSection: React.FC<PropsType> = ({ categories }) => {
  return (
    <React.Fragment>
      <Flex align="center" justify="space-between">
        <Typography.Text
          className="font-bold text-xl p-2 bg-primary rounded-t-md"
          ellipsis
        >
          {categories.name}
        </Typography.Text>
        <Space size="middle" className="cursor-pointer">
          {categories?.categoryItems.map((item: CategoryTypes) => {
            return (
              <Typography.Text
                className="suptitle-hover hidden lg:block"
                key={item.id}
              >
                {item.name}
              </Typography.Text>
            );
          })}

          <Typography.Text className="suptitle-hover hidden xs:block">
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
