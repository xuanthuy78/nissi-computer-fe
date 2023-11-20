import React from "react";
import { Space, Image } from "antd";
import { banner2 } from "../../assets/images";
import BannerSection from "../../components/nissi/BannerSection";
import { banners, productsTest } from "../../features/utils/json";
import ProductSection from "../../components/nissi/Home/ProductSection";
import { useMobile } from "../../features/common/hooks";

const HomePage: React.FC = () => {
  const isMobile = useMobile();
  return (
    <React.Fragment>
      <BannerSection datas={banners} />

      <Space className="block container-mobile md:container-build">
        <Space className="block pb-6">
          <ProductSection products={productsTest} colsize={isMobile} />
        </Space>
        <Space className="block hover-1">
          <Image src={banner2} preview={false} className="!max-h-72" />
        </Space>

        <Space className="block space-main">
          <ProductSection products={productsTest} colsize={isMobile} />
        </Space>
        <Space className="block space-main">
          <ProductSection products={productsTest} colsize={isMobile} />
        </Space>
        <Space className="block space-main">
          <ProductSection products={productsTest} colsize={isMobile} />
        </Space>
      </Space>
    </React.Fragment>
  );
};

export default HomePage;
