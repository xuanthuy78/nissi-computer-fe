import { Card, Typography } from "antd";
import React from "react";

const AnnounceSection = () => {
  return (
    <Card className="text-center">
      <Typography.Title level={5} className="text-basic">
        Cảm ơn quý khách đã đặt hàng
      </Typography.Title>
      <Typography.Paragraph className="text-basic">
        Đơn hàng của quý khách đã được gửi thành công. Bộ phận chăm sóc khách
        hàng của website sẽ liên hệ lại với quý khách thông qua đơn hàng để có
        hướng dẫn thêm.
      </Typography.Paragraph>
      <Typography.Paragraph className="text-basic">
        Cảm ơn quý khách!
      </Typography.Paragraph>
    </Card>
  );
};

export default AnnounceSection;
