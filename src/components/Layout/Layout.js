import React, { Fragment } from 'react';

import { Container } from 'reactstrap';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

const Layout = (props) => (
  <Fragment>
    <NavBar />
    <Container>{props.children}</Container>
    <Footer />
  </Fragment>
);

export default Layout;
