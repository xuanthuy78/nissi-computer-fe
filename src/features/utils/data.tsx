import {
  HomeOutlined,
  InfoCircleOutlined,
  FireOutlined,
  DeploymentUnitOutlined,
  ContactsOutlined,
  DesktopOutlined,
  DatabaseOutlined,
  LaptopOutlined,
  FileProtectOutlined,
  InsertRowBelowOutlined,
} from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { CareTypes } from "../common";
import {
  IconGift,
  IconRocket,
  IconStar,
  IconSync,
  IconWallet,
  IconWeChat,
  IconWorld,
} from "../../components/icons";
import { Link } from "react-router-dom";

export const menus = [
  {
    label: "Trang chủ",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Giới thiệu",
    key: "introduction",
    icon: <InfoCircleOutlined />,
  },
  {
    label: "Ưu đãi trong ngày",
    key: "sale",
    icon: <FireOutlined />,
  },
  {
    label: "Dịch vụ",
    key: "service",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        label: "Sửa máy tính tận nơi",
        key: "2",
      },
      {
        label: "Sửa máy tính tận nơi",
        key: "1",
      },
      {
        label: "Sửa máy tính tận nơi",
        key: "4",
      },
    ],
    theme: "light",
  },
  {
    label: "Liên hệ",
    key: "contact",
    icon: <ContactsOutlined />,
  },
];

export const products = [
  {
    key: "1",
    label: (
      <Link to="products/hdfs">
        <DesktopOutlined /> Máy tính để bàn
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="products/hdfs">
        <DatabaseOutlined /> PC Gaming
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to="products/hdfs">
        <LaptopOutlined /> Máy tính xách tay
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to="products/hdfs">
        <InsertRowBelowOutlined /> Linh kiện máy tính
      </Link>
    ),
  },
  {
    key: "5",
    label: <Link to="products/hdfs">Phụ kiện máy tính</Link>,
  },
  {
    key: "6",
    label: <Link to="products/hdfs">Thiết bị mạng</Link>,
  },
  {
    key: "7",
    label: <Link to="products/hdfs">Camera giám sát</Link>,
  },
  {
    key: "8",
    label: (
      <Link to="products/hdfs">
        <FileProtectOutlined /> Phần mềm bản quyền
      </Link>
    ),
  },
];

export const cares: CareTypes[] = [
  {
    id: 1,
    title: "Giao Hàng Toàn Quốc",
    describe: "Nhận hàng và thanh toán tại nhà",
    Icon: IconRocket,
  },
  {
    id: 2,
    title: "Đổi trả dễ dàng",
    describe: "Đổi mới trong 7 ngày đầu",
    Icon: IconSync,
  },
  {
    id: 3,
    title: "Hỗ trợ tận tình",
    describe: "Tư vấn tổng đài miễn phí 24/7",
    Icon: IconWeChat,
  },
];

export const utilities: CareTypes[] = [
  {
    id: 1,
    title: "Sản phẩm chính hãng",
    Icon: IconStar,
  },
  {
    id: 2,
    title: "Ưu đãi hấp dẫn",
    Icon: IconGift,
  },
  {
    id: 3,
    title: "Giao hàng toàn quốc",
    Icon: IconWorld,
  },
  {
    id: 4,
    title: "Thanh toán tiện lợi",
    Icon: IconWallet,
  },
];
export const IconFont = createFromIconfontCN({
  scriptUrl: "//Linkt.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
