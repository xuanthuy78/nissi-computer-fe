import { Carousel, Space, Image } from "antd";
import React from "react";

export type PropsType = {
  datas: { src: string }[];
};

const BannerSection: React.FC<PropsType> = ({ datas }) => {
  return (
    <Carousel autoplay className="!hidden lg:!block ">
      {datas.map((item, index) => {
        return (
          <Space key={index}>
            <Image
              src={item.src}
              alt={item.src}
              preview={false}
              height={400}
              width={"100%"}
            />
          </Space>
        );
      })}
    </Carousel>
  );
};

export default BannerSection;
