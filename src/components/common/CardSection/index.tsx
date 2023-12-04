import React from "react";
import { Card, Space, Typography, Image, Tag } from "antd";
import { ProductTypes } from "../../../features/common";
import { discount, formatNumber } from "../../../features/utils";
import { laptop } from "../../../assets/images";
import { Link } from "react-router-dom";

const CardSection: React.FC<{ product: ProductTypes }> = ({ product }) => {
  return (
    <Card
      className="relative m-3"
      hoverable
      bordered={false}
      cover={<Image alt={laptop} src={laptop} />}
    >
      <Link to={`/${product.slug}`}>
        {product.marketPrice && product.price && (
          <Tag className="absolute right-0 top-2 font-bold bg-red-600">
            -{discount(product.price, product.marketPrice)}%
          </Tag>
        )}
        <Typography.Title
          ellipsis={{
            rows: 3,
          }}
          level={5}
          className="!font-bold m-0 !text-secondary"
          style={{ flexGrow: 1 }}
        >
          {product?.productName}
        </Typography.Title>

        <Space direction="vertical" size={0}>
          <Typography.Text type="secondary" delete>
            {formatNumber(product.marketPrice)}
            <sup>đ</sup>
          </Typography.Text>
          <Typography.Text type="danger" className="font-bold">
            {formatNumber(product.price)} <sup>đ</sup>
          </Typography.Text>
        </Space>
      </Link>
    </Card>
  );
};

export default CardSection;
