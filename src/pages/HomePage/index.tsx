import React from "react";
import { Layout, Space, Image } from "antd";
import { banner2 } from "../../assets/images";
import BannerSection from "../../components/nissi/BannerSection";
import { banners, productsTest } from "../../features/utils/json";
import ProductSection from "../../components/nissi/Home/ProductSection";

const HomePage: React.FC = () => {
  return (
    <Layout.Content>
      <BannerSection datas={banners} />

      <Space className="block container-build">
        <Space className="block pb-6">
          <ProductSection products={productsTest} />
        </Space>
        <Space className="block hover-1">
          <Image src={banner2} preview={false} className="!max-h-72" />
        </Space>

        <Space className="block space-main">
          <ProductSection products={productsTest} />
        </Space>
        <Space className="block space-main">
          <ProductSection products={productsTest} />
        </Space>
        <Space className="block space-main">
          <ProductSection products={productsTest} />
        </Space>
      </Space>
    </Layout.Content>
  );
};

export default HomePage;
