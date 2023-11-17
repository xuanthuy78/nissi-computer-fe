import React from "react";
import { Button, Form, Select, Space, AutoComplete, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export type PropsType = {
  onFinish: (value: string) => void;
};

const SearchSection: React.FC<PropsType> = ({ onFinish }) => {
  // const options = [{ value: "ct01", label: "May tinh" }];
  // const [fields, setFields] = useState<any>([
  //   { name: ["categories"], value: "all" },
  //   { name: ["search"], value: "ct01" },
  // ]);
  return (
    <React.Fragment>
      <Form size="large" onFinish={onFinish} autoComplete="off">
        <Space.Compact block>
          <Form.Item name="categories" className="w-1/3 md:w-2/5 lg:w-1/4 mb-0">
            <Select placeholder="Please select a country">
              <Select.Option value="all">Tất cả</Select.Option>
              <Select.Option value="laptop">Laptop</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="search" className="w-2/3 md:w-3/5 lg:w-3/4 mb-0">
            <AutoComplete />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button htmlType="submit" type="primary" className="bg-primary">
              <Typography.Text className="!hidden md:!block font-bold">
                Tìm kiếm
              </Typography.Text>
              <Typography.Text className="!block md:!hidden">
                <SearchOutlined />
              </Typography.Text>
            </Button>
          </Form.Item>
        </Space.Compact>
      </Form>
      {/* <Flex align="center" gap="small" className="m-3">
        <Avatar
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${1}`}
        />
        <Space direction="vertical">
          <Typography.Text className="font-bold !text-blue-green">
            Ổ cứng HDD Western Digital Blue 1TB 3.5 Inch SATA 3
          </Typography.Text>
          <Typography.Text type="danger">50.000</Typography.Text>
        </Space>
      </Flex> */}
    </React.Fragment>
  );
};

export default SearchSection;
