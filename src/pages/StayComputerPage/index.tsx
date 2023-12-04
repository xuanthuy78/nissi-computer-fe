import { Card, Flex, Space, Typography } from "antd";
import React from "react";
import { IconPlane, IconStar, IconSuitcase } from "../../components/icons";

const StayComputerPage = () => {
  return (
    <div className="container-mobile md:container-build">
      <Card>
        <Typography.Title level={1} className="text-center">
          Sửa máy tính tận nơi Đà Nẵng
        </Typography.Title>
        <Typography.Paragraph className="text-basic">
          Dịch vụ sửa máy tính tại nhà Đà Nẵng gần đây, chuyên sửa chữa máy vi
          tính để bàn, sửa laptop. Kỹ thuật sửa máy tính tay nghề cao, giá rẻ uy
          tín tại Đà Nẵng.
        </Typography.Paragraph>
        <Typography.Title level={2} className="text-center">
          Giới thiệu dịch vụ sửa máy tính tận nơi Đà Nẵng
        </Typography.Title>
        <Typography.Paragraph className="text-basic">
          <strong> Nissi Computer</strong> chuyên dịch vụ sửa chữa máy tính tại
          nhà Đà Nẵng. Với hơn 10 năm hoạt động trong lĩnh vực giải pháp công
          nghệ thông tin, sửa máy tính uy tín cho cá nhân, hộ gia đình, công ty
          và các doanh nghiệp trên địa bàn thủ đô. Chúng tôi tự hào là đơn vị
          cung cấp dịch vụ sửa chữa máy tính uy tín nhất – giá cả hợp lý – đội
          ngũ kỹ thuật viên IT dày dặn kinh nghiệm. Cam kết đem đến cho khách
          hàng dịch vụ sửa máy tính giá rẻ, chất lượng tốt nhất tại tất cả quận
          huyện khu vực Đà Nẵng.
        </Typography.Paragraph>
        <Typography.Paragraph className="text-basic">
          Dịch vụ sửa chữa máy vi tính tại nhà ở Đà Nẵng của chúng tôi phục vụ
          quý khách “Sửa chữa tại nhà – Lắp đặt tận nơi” sẽ giúp bạn tiết kiệm
          công sức, thời gian và tiền bạc. Máy tính của bạn gặp sự cố hãy liên
          hệ chúng tôi ngay qua Điện thoại:&nbsp;
          <Typography.Text type="danger" className="text-lg" strong>
            0934.872.371
          </Typography.Text>
          &nbsp; để trải nghiệm dịch vụ sửa máy tính nhanh chóng và chuyên
          nghiệp.
        </Typography.Paragraph>
        <Typography.Title level={2} className="text-center">
          Ưu điểm của dịch vụ sửa chữa máy tính ở Đà Nẵng
        </Typography.Title>
        <Flex gap="large" justify="space-between">
          <Flex vertical align="center">
            <IconPlane />
            <Typography.Title level={4} className="space-main">
              Dịch vụ giá rẻ
            </Typography.Title>
            <Typography.Text className="text-basic text-center">
              Cam kết phục vụ quý khách hàng dịch vụ sửa máy tính uy tín tại nhà
              và giá rẻ nhất tại Đà Nẵng.
            </Typography.Text>
          </Flex>
          <Flex vertical align="center">
            <IconStar size={60} />
            <Typography.Title level={4} className="space-main">
              Cam kết uy tín
            </Typography.Title>
            <Typography.Text className="text-basic text-center">
              Dịch vụ sửa máy tính uy tín nhất là nỗ lực để phục vụ quý khách
              hàng ngày càng chất lượng tại Đà Nẵng.
            </Typography.Text>
          </Flex>
          <Flex vertical align="center">
            <IconSuitcase />
            <Typography.Title level={4} className="space-main">
              Tay nghề chuyên nghiệp
            </Typography.Title>
            <Typography.Text className="text-basic text-center">
              Đội ngũ kỹ thuật máy tính tay nghề cao, phục vụ quý khách nhanh
              chóng và chuyên nghiệp nhất.
            </Typography.Text>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default StayComputerPage;
