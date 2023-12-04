import { Card, Typography, Image, Flex } from "antd";
import React from "react";
import { repairOnline, teamview } from "../../assets/images";

const RepairComputerOnlinePage = () => {
  return (
    <div className="container-mobile md:container-build">
      <Card>
        <Typography.Title level={1} className="text-center">
          Sửa máy tính Online từ xa 24/24h
        </Typography.Title>
        <Typography.Paragraph className="text-basic">
          Tư vấn sửa máy tính Online 24h. Hỗ trợ sửa chữa máy tính online, giải
          đáp trực tuyến về lỗi phần cứng, cài đặt phần mềm máy tính 24/24h trên
          toàn quốc.
        </Typography.Paragraph>
        <Flex justify="center" className="space-main-pb">
          <Image src={repairOnline} width={500} height={500} preview={false} />
        </Flex>

        <Typography.Paragraph className="text-basic">
          <strong>Máy tính Nissi Computer &nbsp;</strong> là trung tâm chuyên
          sửa máy tính tại nhà. Là công ty máy tính hỗ trợ tư vấn sửa máy tính
          Online free cho tất cả người dùng máy tính hoạt động 24h trên toàn
          quốc và cả nước ngoài. Nhằm tri ân khách hàng đã tin tưởng sử dụng
          dịch vụ sửa máy tính tại nhà của chúng tôi trong suốt thời gian qua.
          Máy tính Nissi Computer có tổng đài tư vấn hỗ trợ người dùng máy tính
          trực tuyến:
        </Typography.Paragraph>
        <Typography.Title level={4}>
          Sửa máy tính qua Teamviewer từ xa
        </Typography.Title>
        <Typography.Paragraph className="text-basic">
          Để chúng tôi hỗ trợ sửa máy tính từ xa qua teamviewer cho bạn khi máy
          tính vào được hệ điều hành. Quý khách vui lòng tải về và cài đặt phần
          mềm điều khiển máy tính từ xa Teamviewer free dành cho hệ điều hành
          Windows tại đây.
        </Typography.Paragraph>
        <Flex justify="center" className="space-main-pb">
          <Image src={teamview} width={500} height={500} preview={false} />
        </Flex>
        <Typography.Paragraph className="text-basic">
          Sau đó quý khách bật phần mềm Teamviewer và cài đặt sau đó cung cấp
          cho kỹ thuật chúng tôi <strong>YOUR ID</strong> và
          <strong>Password</strong> điều khiển máy tính từ xa, chúng tôi sẽ hỗ
          trợ sửa máy tính Online 24h miễn phí cho quý khách.
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default RepairComputerOnlinePage;
