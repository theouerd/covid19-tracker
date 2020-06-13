import React, { Fragment } from 'react';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-2">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2020{' '}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.oouerd.com"
                >
                  Oussama Ouerd
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink href="https://github.com/theouerd/covid19-tracker">
                    <span className="ml-1">Source code</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
