import React, { useCallback } from "react";
import Carousel from "react-multi-carousel";
import { CardSection, SubjectSection } from "../../../common";
import { ProductTypes, responsiveProducts } from "../../../../features/common";
import "react-multi-carousel/lib/styles.css";
import { Space } from "antd";
import { categories } from "../../../../features/utils/json";

export type PropsType = {
  products: ProductTypes[];
  colsize: boolean;
};

const ProductSection: React.FC<PropsType> = ({ products, colsize }) => {
  return (
    <Space className="block carousel-list">
      <SubjectSection categories={categories} />
      <Carousel responsive={responsiveProducts} arrows={colsize ? false : true}>
        {products.map((product: ProductTypes, index) => {
          return <CardSection product={product} key={index} />;
        })}
      </Carousel>
    </Space>
  );
};

export default ProductSection;
