import type { ThemeConfig } from "antd";
import { themeColor } from "../../common";

export const configTheme: ThemeConfig = {
  token: {
    colorPrimary: themeColor.utOrange,
  },
  components: {
    Layout: {
      colorBgHeader: themeColor.prussianBlue,
    },
  },
};
