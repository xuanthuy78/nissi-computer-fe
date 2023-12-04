import { Typography, Image, Card, Form, Input, Select } from "antd";
import React from "react";
import { banner } from "../../assets/images";
import { ButtonSubmit } from "../../components/common";
import { AnnounceSection } from "../../components/nissi";

const BuildPcPage = () => {
  return (
    <div className="container-mobile md:container-build">
      <Card>
        <Typography.Title className="text-center">Build PC – Xây dựng cấu hình máy tính PC</Typography.Title>
        <Typography.Paragraph className="text-basic">
          <Typography.Text className="text-basic" strong>
            Nissi Computer
          </Typography.Text>
          &nbsp; phục vụ khách hàng có nhu cầu &nbsp;
          <Typography.Text className="text-basic" strong>
            Build PC
          </Typography.Text>
          &nbsp; theo sở thích và yêu cầu công việc. Giúp bạn xây dựng được bộ máy tính để bàn tối ưu về giá nhưng vẫn đảm bảo hiệu năng và phù hợp với yêu cầu của bạn.
        </Typography.Paragraph>
        <Typography.Paragraph className="text-basic">
          <Typography.Text className="text-basic" strong>
            Nissi Computer
          </Typography.Text>
          &nbsp; có Build sẵn những cấu hình PC Gaming, đồ họa, văn phòng… Khi Build máy tính PC bạn sẽ nhận được nhiều quà tặng mua Linh kiện máy tính, khuyến mãi hấp dẫn mua phụ kiện máy tính PC kèm theo.
        </Typography.Paragraph>
        <Image src={banner} preview={false} className="space-main-pb" />
        <Typography.Paragraph className="text-basic">Để Build PC và xây dựng cấu hình máy tính cấu hình cao, giá rẻ Quý khách vui lòng điền thông tin bên dưới đây:</Typography.Paragraph>
        <Card bordered>
          <Form name="dynamic_form_complex" autoComplete="off" layout="vertical">
            <Form.Item name="fullname" label="Họ và tên" rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}>
              <Input placeholder="Họ và tên" />
            </Form.Item>
            <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
              <Input placeholder="Số điện thoại" />
            </Form.Item>

            <Form.Item name="note" label="Mong muốn xây dựng cấu hình">
              <Input.TextArea placeholder="Ghi chú" />
            </Form.Item>

            <Form.Item name="total" label="Mức giá">
              <Input placeholder="Ghi chú" />
            </Form.Item>

            <Form.Item className="mt-6">
              <ButtonSubmit title="Đặt hàng" />
            </Form.Item>
          </Form>
        </Card>
      </Card>
      <AnnounceSection />
    </div>
  );
};

export default BuildPcPage;
