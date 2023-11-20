import React from "react";
import {
  Card,
  Col,
  Flex,
  Menu,
  MenuProps,
  Pagination,
  Row,
  Select,
  Typography,
} from "antd";
import { CardSection, SubjectSection } from "../../components/common";
import { categories, productsTest } from "../../features/utils/json";
import { ProductTypes } from "../../features/common";

const menus: MenuProps["items"] = [
  {
    key: "sub1",
    label: "Camera giám sát",
    children: [
      {
        key: "b1",
        label: "Camera giám sát 1",
      },
      {
        key: "b2",
        label: "Camera giám sát 2",
      },
      {
        key: "b3",
        label: "Camera giám sát 3",
      },
    ],
  },
  {
    key: "sub2",
    label: "Máy tính bàn",
  },
  {
    key: "sub3",
    label: "Máy tính xách tay",
  },
  {
    key: "sub4",
    label: "Máy tính văn phòng",
  },
];

const ProductsPage: React.FC = () => {
  return (
    <Flex gap="large" className="container-mobile md:container-build products">
      <div className="hidden lg:block">
        <Menu
          style={{ width: 250 }}
          defaultSelectedKeys={["b2"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={menus}
        />
      </div>
      <div>
        <SubjectSection category={categories} isShow />
        <Card className="mt-6">
          <Flex align="center" justify="space-between">
            <Typography.Title level={5} className="!mb-0">
              6 Sản phẩm tìm thấy
            </Typography.Title>
            <Select
              defaultValue="all"
              style={{ width: 300 }}
              options={[
                { value: "all", label: "Thứ tự mặc định" },
                { value: "asc", label: "Thứ tự theo giá: thấp đến cao" },
                { value: "desc", label: "Thứ tự theo giá: cao đến thấp" },
              ]}
            />
          </Flex>
        </Card>
        <div>
          <Row className="my-6">
            {productsTest.map((product: ProductTypes, index: number) => {
              return (
                <Col xxl={4} xl={4} lg={6} md={6} sm={8}>
                  <CardSection product={product} key={index} />
                </Col>
              );
            })}
          </Row>

          <Card className="text-center">
            <Pagination defaultCurrent={1} total={50} />
          </Card>
        </div>
      </div>
    </Flex>
  );
};

export default ProductsPage;
