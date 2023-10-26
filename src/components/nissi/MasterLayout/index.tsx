import React from "react";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <React.Fragment>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </React.Fragment>
  );
};

export default MasterLayout;
