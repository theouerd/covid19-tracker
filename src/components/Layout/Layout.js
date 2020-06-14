import React, { Fragment } from 'react';

import { Container } from 'reactstrap';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Layout = (props) => (
  <Fragment>
    <NavBar />
    <Container>{props.children}</Container>
    <Footer />
  </Fragment>
);

export default Layout;
