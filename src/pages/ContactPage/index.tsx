import { Card, Flex, Space, Typography } from "antd";
import React from "react";
import { IconFacebook, IconTiktok, IconZalo } from "../../components/icons";
import { Link } from "react-router-dom";
import { CONTACT } from "../../features/common";

const Contact = () => {
  return (
    <div className="container-mobile md:container-build">
      <Card className="p-6">
        <iframe id="map3" src={CONTACT.maps} width="100%" height="400" title="address"></iframe>
        <Typography.Title level={2} className="text-center space-main">
          Liên hệ cho chúng tôi khi bạn có thắc mắc
        </Typography.Title>
        <Flex justify="space-between">
          <Flex vertical align="center">
            <Typography.Title level={4}>Liên hệ</Typography.Title>
            <Typography.Text className="text-basic">
              <strong>Email:</strong> quyvominh91@gmail.com
            </Typography.Text>
            <Typography.Text className="text-basic">
              <strong>Mr. Quy:</strong> 0934.872.371
            </Typography.Text>
          </Flex>
          <Flex vertical align="center">
            <Typography.Title level={4}>Địa chỉ</Typography.Title>
            <Typography.Text className="text-basic">100 Bùi Dương Lịch - Sơn Trà - Đà Nẵng</Typography.Text>
            <Space className="cursor-pointer space-item-hover">
              <Link to={CONTACT.facebook}>
                <IconFacebook />
              </Link>
              <Link to={CONTACT.zalo}>
                <IconZalo />
              </Link>
              <Link to={CONTACT.tiktok}>
                <IconTiktok />
              </Link>
            </Space>
          </Flex>
          <Flex vertical align="center">
            <Typography.Title level={4}>Thời gian làm việc</Typography.Title>
            <Typography.Text className="text-basic">Thứ 2 - Thứ 7</Typography.Text>
            <Typography.Text className="text-basic">07h30 - 18h00</Typography.Text>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Contact;
