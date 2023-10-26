import type { ThemeConfig } from "antd";
import { themeColor } from "../../common";

export const configTheme: ThemeConfig = {
  token: {
    colorPrimary: themeColor.primary,
  },
  components: {
    Layout: {
      headerBg: themeColor.secondary,
      headerColor: themeColor.white,
      footerBg: themeColor.secondary,
    },
    Typography: {
      colorText: themeColor.white,
    },
    Menu: {
      darkItemBg: themeColor.secondary,
      darkItemColor: themeColor.white,
      darkItemHoverColor: themeColor.primary,
    },
    Dropdown: {
      controlHeight: 40,
    },
  },
};
