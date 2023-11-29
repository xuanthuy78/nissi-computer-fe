import { Badge, Button, Card, Divider, Flex, Space, Typography } from "antd";
import React from "react";
import { ProductTypes } from "../../../../features/common";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../../common";

export type PropsType = {
  product: ProductTypes;
};
const Describe: React.FC<PropsType> = ({ product }) => {
  return (
    <React.Fragment>
      <div>
        <ul className="leading-8">
          <li>VGA ASUS NVIDIA GeForce GT 710 2GB GDDR5</li>
          <li>Chipset: Geforce 710</li>
          <li>Bộ nhớ: 2Gb DDR5/ 64Bit</li>
          <li>Chuẩn kết nối: PCI Express 2.0</li>
          <li>Cổng giao tiếp: D-Sub/ DVI/ HDMI</li>
        </ul>
      </div>
      <Divider />
      <Badge.Ribbon
        text={<Typography.Text strong>Quà tặng khuyến mãi</Typography.Text>}
        color="green"
      >
        <Card size="small" className="border-1 border-dashed border-primary">
          <ul className="leading-8">
            <li>VGA ASUS NVIDIA GeForce GT 710 2GB GDDR5</li>
            <li>Chipset: Geforce 710</li>
            <li>Bộ nhớ: 2Gb DDR5/ 64Bit</li>
            <li>Chuẩn kết nối: PCI Express 2.0</li>
            <li>Cổng giao tiếp: D-Sub/ DVI/ HDMI</li>
          </ul>
        </Card>
      </Badge.Ribbon>
      <Divider />
      <Space
        className="bg-gradient-to-r from-blue-800 via-pink-500 to-orange-500 w-full p-5 mb-7"
        direction="vertical"
        size={0}
      >
        <Space align="center" className="pb-4">
          <Typography.Text strong>
            Giá ưu đãi: &nbsp;
            <Typography.Text className="text-2xl text-yellow-300">
              1.559.000 ₫
            </Typography.Text>
          </Typography.Text>
          <Divider type="vertical" className="!border-white" />
          <Typography.Text strong>
            Thị trường: &nbsp;
            <Typography.Text delete> 1.559.000 ₫</Typography.Text>
          </Typography.Text>
        </Space>

        <Flex gap="small" wrap="wrap">
          <Badge status="warning" count="Giá đã có VAT" />
          <Badge status="warning" count="Chính hãng 100%" />
          <Badge status="warning" count="Mua Online giá cực rẻ" />
        </Flex>
      </Space>
      <Link to="/cart">
        <ButtonSubmit title="Đặt hàng" />
      </Link>
    </React.Fragment>
  );
};

export default Describe;
