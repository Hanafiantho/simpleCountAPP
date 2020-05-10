import React from 'react';
import {useSelector} from "react-redux";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Button from "reactstrap/lib/Button";

function Count() {
  const count = useSelector(state => state.count)

  return (
    <div className="container text-center">
      <Card>
        <CardBody>
          <div className="h1">{count}</div>

          <Button className="mx-1" color="danger">-</Button>
          <Button className="mx-1" color="success">+</Button>
        </CardBody>
      </Card>
    </div>
  )
};

export default Count;