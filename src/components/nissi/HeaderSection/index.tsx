import React, { useState } from "react";
import {
  Col,
  Layout,
  Row,
  Image,
  Space,
  Typography,
  Badge,
  Flex,
  Dropdown,
  Menu,
  Divider,
  Drawer,
} from "antd";
import { SearchSection } from "../../common";
import { iconBuild, logo } from "../../../assets/images";
import { ShopFilled, MenuOutlined } from "@ant-design/icons";
import { menus, products } from "../../../features/utils";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout.Header className="leading-none h-auto relative">
      <Row align="middle" justify="space-between" className="py-4">
        <Col lg={5} xl={4} xxl={3}>
          <Link to="/">
            <Image src={logo} preview={false} width={160} height={90} />
          </Link>
        </Col>
        <Col lg={19} xl={20} xxl={21}>
          <Row justify="space-between" align="middle">
            <Col lg={16} xl={17} xxl={19} className="pl-4 hidden lg:block">
              <SearchSection onFinish={() => {}} />
            </Col>
            <Col lg={8} xl={7} xxl={5}>
              <Flex justify="end" align="middle" gap="large">
                <Space className="hidden sm:block">
                  <Flex align="center">
                    <Image
                      src={iconBuild}
                      preview={false}
                      height={30}
                      width={30}
                      className="animate-bounce"
                    />
                    <Space size={0} direction="vertical" className="ml-3">
                      <Typography.Text>Build PC Gaming</Typography.Text>
                      <Typography.Text className="font-bold">
                        Xây dựng cấu hình
                      </Typography.Text>
                    </Space>
                  </Flex>
                </Space>
                <Space>
                  <Badge size="default" count={5} className="end">
                    <ShopFilled className="text-3xl text-white" />
                  </Badge>
                </Space>
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider className="absolute right-0 top-24 border-gray-600 hidden lg:block" />
      <Space className="hidden lg:block">
        <Row align="middle" justify="space-between" className="leading-10">
          <Col lg={5} xl={4} xxl={3}>
            <Dropdown
              menu={{
                items: products,
              }}
            >
              <Space className="cursor-pointer font-bold">
                <MenuOutlined />
                Danh mục sản phẩm
              </Space>
            </Dropdown>
          </Col>
          <Col lg={19} xl={20} xxl={21}>
            <Menu mode="horizontal" theme="dark" items={menus} />
          </Col>
        </Row>
      </Space>

      {/* Mobile */}
      <Space className="block lg:hidden">
        <Row align="middle" justify="space-between" className="pb-4">
          <Col span={3}>
            <MenuOutlined
              className="cursor-pointer text-2xl"
              onClick={() => setOpen(true)}
            />
            <Drawer
              title={
                <Typography.Title level={3} className="!m-0">
                  Danh mục sản phẩm
                </Typography.Title>
              }
              placement="left"
              onClose={() => setOpen(false)}
              open={open}
              key="1"
            >
              <Menu theme="light" items={products} className="!border-0" />
            </Drawer>
          </Col>
          <Col span={21}>
            <SearchSection onFinish={() => {}} />
          </Col>
        </Row>
      </Space>
    </Layout.Header>
  );
};

export default HeaderSection;
