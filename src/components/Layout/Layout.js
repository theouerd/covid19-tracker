import React, { Fragment } from "react";

import { Container } from "reactstrap";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => (
  <Fragment>
    <NavBar />
    <Container>{children}</Container>
  </Fragment>
);

export default Layout;
