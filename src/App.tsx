import React from "react";
import Routes from "./routes";
import "./App.scss";

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
      {/* <Row gutter={[12, 12]}>
        <Col>
          <CardSection product={product} />
        </Col>
      </Row> */}
      <Routes />
      {/* <Menu mode="horizontal" items={menus} /> */}
    </React.Fragment>
  );
};

export default App;
