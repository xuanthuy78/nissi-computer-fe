import React from "react";
import {
  Layout,
  Breadcrumb,
  Typography,
  Col,
  Row,
  Divider,
  Card,
  Tabs,
  TabsProps,
  Flex,
} from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductTypes, responsiveProducts } from "../../features/common";
import { productdetail, productsTest } from "../../features/utils/json";
import { CardSection } from "../../components/common";
import { Connect, Describe, Images } from "../../components/nissi";
import { useMobile } from "../../features/common/hooks";

const DetailProductPage: React.FC = () => {
  const isMobile = useMobile();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <Typography.Title level={5} className="!mb-0">
          Sản phẩm tương tự
        </Typography.Title>
      ),
      children: (
        <div className="carousel-list">
          <Carousel
            responsive={responsiveProducts}
            arrows={isMobile ? false : true}
          >
            {productsTest.map((product: ProductTypes, index: number) => {
              return <CardSection product={product} key={index} />;
            })}
          </Carousel>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Typography.Title level={5} className="!mb-0">
          Sản phẩm cùng hãng
        </Typography.Title>
      ),
      children: (
        <div className="carousel-list">
          <Carousel
            responsive={responsiveProducts}
            arrows={isMobile ? false : true}
          >
            {productsTest.map((product: ProductTypes, index: number) => {
              return <CardSection product={product} key={index} />;
            })}
          </Carousel>
        </div>
      ),
    },
  ];

  return (
    <Layout.Content className="container-mobile md:container-build detail-product">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "May tinh xach tay",
          },
          {
            title: "Laptop theo hang",
          },
          {
            title: "Laptop lenovo",
          },
        ]}
      />

      <Card className="my-6">
        <Typography.Title level={3}>
          Ổ cứng HDD Western Digital Blue 1TB 3.5 Inch SATA 3
        </Typography.Title>
        <Flex gap="small" wrap="wrap">
          <Typography.Text type="warning" strong>
            Thương Hiệu: Dell
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text type="success" strong>
            Tình Trạng: Còn Hàng
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text type="danger" strong>
            Bảo Hành: 24 Tháng
          </Typography.Text>
        </Flex>

        <Row>
          <Col xs={24} xl={8} xxl={9} span={9}>
            <Images images={productdetail.imageCollection} />
          </Col>
          <Col xs={24} xl={10} xxl={11} span={11} className="xl:px-10">
            <Describe product={productdetail} />
          </Col>
          <Col xs={24} xl={6} xxl={4} span={4}>
            <Connect />
          </Col>
        </Row>
      </Card>
      <Card>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </Layout.Content>
  );
};

export default DetailProductPage;
