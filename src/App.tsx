import React from "react";
import Routes from "./routes";
import "./App.scss";
import { Layout } from "antd";
import { ScrollToTop } from "./components/common";

const App: React.FC = () => {
  return (
    <Layout>
      <Layout.Content>
        <ScrollToTop />
        <Routes />
      </Layout.Content>
    </Layout>
  );
};

export default App;
