import React from 'react';
import '../css/Dashboard.css';
import { Row, Col } from 'react-bootstrap';
import { boxContent } from '../constant/constant';

interface BoxContent {
  title: string;
  count: number;
  img: string;
}

const Dashboard: React.FC = () => {
  const Box = (boxContent: BoxContent[]) => {
    return boxContent.map((input, index) => (
      <Col md={12} lg={3} className="m-0 p-0" key={index}>
        <div className="boxcss d-flex justify-content-between align-items-center rounded-4 p-3">
          <div>
            <h4>{input.title}</h4>
            <h4>{input.count}</h4>
          </div>
          <div>
            <img src={input.img} alt="img" className="p-2" />
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <div className="ms-3 ms-md-5 mt-5 m-0 p-0">
      <Row className="w-100">
        <h2 className="w-100">Dashboard</h2>
      </Row>
      <Row className="gap-5 mt-4 w-100">{Box(boxContent)}</Row>
    </div>
  );
};

export default Dashboard;