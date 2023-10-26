import React from "react";
import { Carousel, Layout, Space, Image } from "antd";
import { banner, banner1, banner2 } from "../../assets/images";

const HomePage: React.FC = () => {
  return (
    <Layout.Content>
      <Carousel autoplay>
        <Space>
          <Image src={banner} preview={false} height={400} width={"100%"} />
        </Space>
        <Space>
          <Image src={banner1} preview={false} height={400} width={"100%"} />
        </Space>
        <Space>
          <Image src={banner2} preview={false} height={400} width={"100%"} />
        </Space>
      </Carousel>
      hello
    </Layout.Content>
  );
};

export default HomePage;
