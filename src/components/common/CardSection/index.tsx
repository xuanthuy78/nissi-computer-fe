import React, { useEffect, useState } from "react";
import { Card, Space, Typography, Image, Button, Tag } from "antd";
import { ProductTypes } from "../../../features/common";
import { discount, formatNumber } from "../../../features/utils";
import { laptop } from "../../../assets/images";

const CardSection: React.FC<{ product: ProductTypes }> = ({ product }) => {
  return (
    <Card
      className="relative m-3"
      hoverable
      bordered={false}
      cover={<Image alt={laptop} src={laptop} />}
    >
      {product.marketPrice && product.price && (
        <Tag className="absolute right-0 top-2 font-bold bg-red-500">
          -{discount(product.price, product.marketPrice)}%
        </Tag>
      )}
      <Typography.Title
        ellipsis={{
          rows: 3,
        }}
        level={5}
        className="!font-bold m-0 !text-blue-green"
        style={{ flexGrow: 1 }}
      >
        {product?.productName}
      </Typography.Title>

      <Space size="middle" style={{ flexGrow: 1 }}>
        <Typography.Text type="danger" className="font-bold ">
          {formatNumber(product.price)} <sup>đ</sup>
        </Typography.Text>
        <Typography.Text type="secondary" delete>
          {formatNumber(product.marketPrice)}
          <sup>đ</sup>
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default CardSection;
