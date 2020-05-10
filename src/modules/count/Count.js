import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Button from "reactstrap/lib/Button";
import {increase, decrease} from "../../redux/actions/count-action";

function Count() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      <Card>
        <CardBody>
          <div className="h1">{count}</div>

          <Button 
            className="mx-1" 
            color="danger"
            onClick={() => dispatch(decrease())}
          >
            -
          </Button>
          <Button 
            className="mx-1" 
            color="success"
            onClick={() => dispatch(increase())}
          >
            +
          </Button>
        </CardBody>
      </Card>
    </div>
  )
};

export default Count;