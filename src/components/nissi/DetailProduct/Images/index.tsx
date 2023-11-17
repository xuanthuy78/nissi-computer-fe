import React from "react";
import { Image } from "antd";
import { useMediaQuery } from "react-responsive";
import { laptop } from "../../../../assets/images";
import { ProductTypes, responsiveProducts } from "../../../../features/common";
import { productsTest } from "../../../../features/utils/json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMobile } from "../../../../features/common/hooks";

export type PropsTypes = {
  images: string[];
};

const Images: React.FC<PropsTypes> = ({ images }) => {
  const isMobile = useMobile();
  return (
    <React.Fragment>
      <Image src={laptop} alt={laptop} className="max-h-700" />
      <div className="w-9/12 mx-auto carousel-list">
        <Carousel
          responsive={responsiveProducts}
          arrows={isMobile ? false : true}
        >
          {productsTest.map((product: ProductTypes, index: number) => {
            return (
              <div className="carousel-item">
                <Image src={laptop} width={50} height={50} preview={false} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Images;
