import {
  Form,
  InputNumber,
  List,
  Space,
  Typography,
  Image,
  Flex,
  Card,
  Radio,
  Input,
  Select,
  Row,
  Col,
  Breadcrumb,
  Button,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconCart, IconDelete } from "../../components/icons";
import { formatNumber } from "../../features/utils";
import { ButtonSubmit } from "../../components/common";
import "./style.scss";

const ListMeta: React.FC<any> = ({ value }) => {
  return (
    <List.Item.Meta
      avatar={
        <Space className="border p-2">
          <Image
            src={value.productImage}
            width={52}
            height={52}
            preview={false}
          />
        </Space>
      }
      title={
        <Link to="/">
          <Typography.Title
            level={5}
            ellipsis={{
              rows: 3,
            }}
          >
            {value.productName}
          </Typography.Title>
        </Link>
      }
      description={<div dangerouslySetInnerHTML={{ __html: value.gift }} />}
    />
  );
};

const Price: React.FC<any> = ({ value }) => {
  return (
    <Typography.Text className="text-basic">
      {formatNumber(value)} đ
    </Typography.Text>
  );
};

const productsTest = [
  {
    id: "21212",
    description: {
      productName:
        "Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)",
      productImage: require("../../assets/images/laptop.png"),
      gift: `<ul class="leading-8"><li>VGA ASUS NVIDIA GeForce GT 710 2GB GDDR5</li><li>Chipset: Geforce 710</li><li>Bộ nhớ: 2Gb DDR5/ 64Bit</li><li>Chuẩn kết nối: PCI Express 2.0</li><li>Cổng giao tiếp: D-Sub/ DVI/ HDMI</li></ul>`,
    },
    price: 8890000,
    slug: "man-hinh-10inch-1",
    quantity: 1,
  },
  {
    id: "21212",
    description: {
      productName:
        "Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)Máy tính xách tay Dell Latitude 5520 (Intel Core i5.1145G7,15.6inchFHD)",
      productImage: require("../../assets/images/laptop.png"),
      gift: `<ul class="leading-8"><li>VGA ASUS NVIDIA GeForce GT 710 2GB GDDR5</li><li>Chipset: Geforce 710</li><li>Bộ nhớ: 2Gb DDR5/ 64Bit</li><li>Chuẩn kết nối: PCI Express 2.0</li><li>Cổng giao tiếp: D-Sub/ DVI/ HDMI</li></ul>`,
    },
    price: 8890000,
    slug: "man-hinh-10inch-1",
    quantity: 1,
  },
];

const ShoppingPage: React.FC = () => {
  const provinceData: any = ["Zhejiang", "Jiangsu"];

  const cityData: any = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
  };

  type CityName = keyof typeof cityData;

  const [products, setProducts] = useState(productsTest);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(
    cityData[provinceData[0] as CityName][0]
  );

  const onChange = (e: any, eb: any) => {
    console.log(eb);
    const total = eb.products.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    setTotalPrice(total);
    setProducts(eb);
  };
  useEffect(() => {
    const total = products.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    setTotalPrice(total);
  }, []);

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };

  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "May tinh xach tay",
            },
            {
              title: "Laptop theo hang",
            },
            {
              title: "Laptop lenovo",
            },
          ]}
          className="space"
        />

        <Card className="mb-6">
          <Form
            name="dynamic_form_complex"
            autoComplete="off"
            onValuesChange={onChange}
            initialValues={{ products: products }}
            layout="vertical"
          >
            <Typography.Text italic className="text-basic">
              <span className="text-red-500">Để đặt hàng</span>, quý khách hàng
              vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các
              thông tin dưới đây:
            </Typography.Text>
            <Form.List name="products">
              {(fields, { add, remove }) => (
                <>
                  <List
                    itemLayout="horizontal"
                    dataSource={fields}
                    renderItem={(item) => (
                      <List.Item
                        className="!block md:!flex"
                        actions={[
                          <Space
                            onClick={() => {
                              remove(item.name);
                            }}
                            className="hidden md:block mb-6"
                          >
                            <IconDelete />
                          </Space>,
                        ]}
                      >
                        <Form.Item
                          name={[item.name, "description"]}
                          style={{ flex: 1 }}
                        >
                          <ListMeta />
                        </Form.Item>
                        <Space>
                          <Form.Item name={[item.name, "price"]}>
                            <Price />
                          </Form.Item>
                          <Form.Item name={[item.name, "quantity"]}>
                            <InputNumber min={1} max={50} />
                          </Form.Item>
                          <Space
                            onClick={() => {
                              remove(item.name);
                            }}
                            className="block md:hidden mb-6"
                          >
                            <IconDelete />
                          </Space>
                        </Space>
                      </List.Item>
                    )}
                  />
                </>
              )}
            </Form.List>
            <Flex align="center" justify="space-between">
              <Typography.Title level={4}>Tổng tiền:</Typography.Title>
              <Form.Item name="totalPrice">
                <Typography.Title level={4} type="warning" className="!mb-0">
                  {formatNumber(totalPrice)}
                </Typography.Title>
              </Form.Item>
            </Flex>
            <Card bordered>
              <Typography.Title level={4}>
                1. Thông tin khách hàng
              </Typography.Title>
              <Form.Item name="radio-group">
                <Radio.Group>
                  <Radio value="male">Anh</Radio>
                  <Radio value="famale">Chị</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="fullname"
                label="Họ và tên"
                rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
              >
                <Input placeholder="Họ và tên" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Vui lòng nhập emai;" }]}
              >
                <Input placeholder="Email(để nhận bản sao lưu đơn hàng" />
              </Form.Item>
              <Form.Item name="note" label="Ghi chú">
                <Input placeholder="Ghi chú" />
              </Form.Item>
              <Form.Item name="province" label="Tỉnh/Thành phố">
                <Select
                  // defaultValue={provinceData[0]}
                  onChange={handleProvinceChange}
                  options={provinceData.map((province: any) => ({
                    label: province,
                    value: province,
                  }))}
                />
              </Form.Item>
              <Form.Item name="city" label="Quận/Huyện">
                <Select
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city: any) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </Form.Item>
              <Form.Item name="wards" label="Xã/Phường">
                <Select
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city: any) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </Form.Item>
              <Form.Item name="address" label="Địa chỉ">
                <Input placeholder="Địa chỉ" />
              </Form.Item>

              <Typography.Title level={4}>
                2. Chọn cách thức nhận hàng
              </Typography.Title>
              <Typography.Text className="text-basic">
                Chọn phương thức nhận hàng sẽ giúp bạn nhận được sản phẩm nhanh
                hơn
              </Typography.Text>
              <Form.Item name="radio-group">
                <Radio.Group>
                  <Radio value="ship">
                    Giao hàng tận nơi (Có Phí Giao Hàng)
                  </Radio>
                  <Radio value="store">Nhận hàng tại cửa hàng</Radio>
                </Radio.Group>
              </Form.Item>

              <Typography.Title level={4}>
                3. Chọn hình thức thanh toán
              </Typography.Title>
              <Form.Item name="radio-group">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="crash">
                      Thanh toán tiền mặt khi nhận hàng (Tiền Mặt/Quẹt Thẻ ATM,
                      Visa, Master)
                    </Radio>
                    <Radio value="atm">
                      Thanh toán qua chuyển khoản qua tài khoản ngân hàng
                      (khuyên dùng)
                    </Radio>
                    <Radio value="pay">Trả góp có lãi suất</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Card>
            <Form.Item className="mt-6">
              <ButtonSubmit title="Đặt hàng" />
            </Form.Item>
          </Form>
        </Card>
        <Card className="space">
          <Flex justify="center">
            <Space className="no-cart" direction="vertical" size="large">
              <IconCart />
              <Typography.Text className="text-basic">
                Không có sản phẩm nào trong giỏ hàng của bạn
              </Typography.Text>
              <Link to="/">
                <Button type="primary" className="bg-primary font-bold">
                  MUA HÀNG NGAY
                </Button>
              </Link>
            </Space>
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};

export default ShoppingPage;
