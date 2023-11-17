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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <DesktopOutlined /> Máy tính để bàn
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <DatabaseOutlined /> PC Gaming
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <LaptopOutlined /> Máy tính xách tay
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <InsertRowBelowOutlined /> Linh kiện máy tính
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Phụ kiện máy tính
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Thiết bị mạng
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Camera giám sát
      </a>
    ),
  },
  {
    key: "8",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <FileProtectOutlined /> Phần mềm bản quyền
      </a>
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
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
