import React from 'react';

import CountUp from 'react-countup';
import { formatDate } from '../../helpers/utils';

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  Spinner,
} from 'reactstrap';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed)
    return (
      <Container className="text-center">
        <Spinner />
      </Container>
    );
  return (
    <Row className="text-center">
      <Col lg="4" md="4" sm="4" xs="12">
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle className="text-uppercase text-muted mb-0">
                  INFECTED
                </CardTitle>
                <span className="h4 text-primary font-weight-bold mb-0">
                  <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                  />
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="fas fa-chart-bar" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="mr-2">Number of active cases of COVID-19.</span>
            </p>
            <span className="text-nowrap text-muted">
              {formatDate(lastUpdate)}
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4" md="4" sm="4" xs="12">
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle className="text-uppercase text-muted mb-0">
                  RECOVRED
                </CardTitle>
                <span className="h4 text-success font-weight-bold mb-0">
                  <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2.5}
                    separator=","
                  />
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="fas fa-chart-bar" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="mr-2">Number of active cases of COVID-19.</span>
            </p>
            <span className="text-nowrap text-muted">
              {formatDate(lastUpdate)}
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4" md="4" sm="4" xs="12">
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle className="text-uppercase text-muted mb-0">
                  DEATHS
                </CardTitle>
                <span className="h4 text-danger font-weight-bold mb-0">
                  <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2.5}
                    separator=","
                  />
                </span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="fas fa-chart-bar" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-sm">
              <span className="mr-2">Number of active cases of COVID-19.</span>
            </p>
            <span className="text-nowrap text-muted">
              {formatDate(lastUpdate)}
            </span>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
