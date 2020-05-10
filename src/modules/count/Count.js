import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Button from "reactstrap/lib/Button";
import {increase, decrease} from "../../redux/actions/count-action";
import {logout} from "../../redux/actions/auth-action";

// CSS
import "./Count.css";

function Count() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="count-container text-center">
      <Card className="mx-auto count-card">
        <CardBody className="pt-2 pr-2">
          <div className="text-right">
            <Button 
              className="signout-btn p-0 border-0"
              onClick={() => dispatch(logout())}
            >
              <FontAwesomeIcon icon={faSignOutAlt} color="black"/>
            </Button>
          </div>
          <div className="h1">{count}</div>

          <Button 
            className="mx-1 count-btn" 
            color="danger"
            onClick={() => dispatch(decrease())}
          >
            -
          </Button>
          <Button 
            className="mx-1 count-btn" 
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