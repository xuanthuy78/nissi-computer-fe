import type { ThemeConfig } from "antd";
import { themeColor } from "../../common";

export const configTheme: ThemeConfig = {
  token: {
    colorPrimary: themeColor.primary,
  },
  components: {
    Layout: {
      colorBgHeader: themeColor.secondary,
    },
  },
};
