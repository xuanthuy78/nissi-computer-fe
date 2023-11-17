import React from "react";
import { Space, Descriptions } from "antd";
import { utilities } from "../../../../features/utils";
import { CareSection } from "../../../common";

const Connect: React.FC = () => {
  return (
    <React.Fragment>
      <Space direction="vertical" className="bg-gray-100 w-full p-4">
        {utilities.map((item) => {
          return <CareSection data={item} Icon={item.Icon} colorText />;
        })}
      </Space>

      <Descriptions
        title="Điện thoại tư vấn - đặt hàng:"
        size="small"
        className="mt-6"
      >
        <Descriptions.Item> Minh Quy: 0934872371</Descriptions.Item>
      </Descriptions>
      <Descriptions title="Địa chỉ mua hàng:" size="small" className="my-4">
        <Descriptions.Item>
          100 Bui Duong Lich - Son Tra - Da Nang
        </Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item>
          <iframe
            id="map3"
            src="https://maps.google.com/maps?q=100%20bui%20duong%20lich&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="200"
            title="address"
          ></iframe>
        </Descriptions.Item>
      </Descriptions>
    </React.Fragment>
  );
};

export default Connect;
