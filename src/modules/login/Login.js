import React from "react";
import {useDispatch} from "react-redux";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Button from "reactstrap/lib/Button";
import {login} from "../../redux/actions/auth-action";

// CSS
import "./Login.css";

function Login() {
  const dispatch = useDispatch()

  return (
    <div className="container text-center">
      <Card className="mx-auto">
        <CardBody>
          <div>To use count apps, click Login button below</div>
          <Button 
            color="primary" 
            className="mt-4"
            onClick={() => dispatch(login())}
          >
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  )
};

export default Login
