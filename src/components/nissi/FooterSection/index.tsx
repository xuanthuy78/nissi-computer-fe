import React from "react";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import { cares } from "../../../features/utils";
import { CareSection } from "../../common";
import { CareTypes } from "../../../features/common";

const FooterSection: React.FC = () => {
  return (
    <Layout.Footer className="!text-white">
      <Row gutter={[0, 16]} justify="space-between" align="middle">
        {cares.map((item: CareTypes) => {
          return (
            <Col span={24} md={6} key={item.id}>
              <CareSection data={item} />
            </Col>
          );
        })}
      </Row>
      <Divider className="border-gray-600" />
      <Row justify="space-between">
        <Col span={24} md={6}>
          <Typography.Title level={3} className="!text-white font-bold">
            Thông tin Chung
          </Typography.Title>
          <Space direction="vertical" size="middle">
            <Typography.Text>Giới thiệu Nissi Computer</Typography.Text>
            <Typography.Text>Liên hệ, góp ý</Typography.Text>
            <Typography.Text>Khách hàng doanh nghiệp</Typography.Text>
          </Space>
        </Col>
        <Col span={24} md={6}>
          <Typography.Title level={5} className="!text-white font-bold">
            HỖ TRỢ KHÁCH HÀNG
          </Typography.Title>
          <Space direction="vertical" size="middle">
            <Typography.Text>Tìm hiểu về mua trả góp</Typography.Text>
            <Typography.Text>Chính sách vận chuyển, giao hàng</Typography.Text>
            <Typography.Text>Chính sách, quy định chung</Typography.Text>
          </Space>
        </Col>
        <Col span={24} md={6}>
          <Typography.Title level={4} className="!text-white font-bold">
            Nissi Computer
          </Typography.Title>
          <Space direction="vertical" size="small">
            <Typography.Text strong>
              Thời gian làm việc:
              <Typography.Text italic> 07h30 - 18h00</Typography.Text>
            </Typography.Text>
            <Typography.Text strong>
              Địa chỉ:
              <Typography.Text italic>
                100 Bùi Dương Lịch - Sơn Trà - Đà Nẵng
              </Typography.Text>
            </Typography.Text>
            <Typography.Text strong>
              Tel: <Typography.Text italic> 0934.872.371</Typography.Text>
            </Typography.Text>
            <Typography.Text strong>
              Email:
              <Typography.Text italic> quyvominh91@gmail.com</Typography.Text>
            </Typography.Text>

            <Space>
              <Typography.Link
                href="https://www.facebook.com/Kyorom"
                target="_blank"
              >
                <FacebookFilled
                  className="!text-blue-600 text-3xl !bg-white rounded animate-pulse"
                  twoToneColor="#eb2f96"
                />
              </Typography.Link>
            </Space>
          </Space>
        </Col>
      </Row>
      <Space className="!text-center block mt-6">
        <Typography.Text italic>
          © 2023 NISSI COMPUTER.All Rights Reserved
        </Typography.Text>
      </Space>
    </Layout.Footer>
  );
};

export default FooterSection;
