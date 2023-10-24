import React from "react";
import "./App.scss";
import { SearchSection } from "./components/common";
import SubjectSection from "./components/common/SubjectSection";
import HeaderSection from "./components/nissi/HeaderSection";

const App = () => {
  // const product: any = {
  //   productName:
  //     "Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)",
  //   productImage:
  //     "http://localhost:4000/public/uploads/Happy Birthday-1694682478354.png",
  //   imageCollection: [
  //     "http://localhost:4000/public/uploads/1-1694682478424.png",
  //     "http://localhost:4000/public/uploads/HopeChris-1694682478442.png",
  //   ],
  //   price: 8890000,
  //   marketPrice: 15000000,
  //   slug: "man-hinh-10inch-1",
  // };

  return (
    <React.Fragment>
      <SearchSection
        onFinish={(e) => {
          console.log(e);
        }}
      />
      <SubjectSection />

      {/* <Row gutter={[12, 12]}>
        <Col>
          <CardSection product={product} />
        </Col>
      </Row> */}
      <HeaderSection />
      {/* <Menu mode="horizontal" items={menus} /> */}
    </React.Fragment>
  );
};

export default App;
