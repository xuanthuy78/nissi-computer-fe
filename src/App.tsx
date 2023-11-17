import React from "react";
import Routes from "./routes";
import "./App.scss";
import { Layout } from "antd";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
