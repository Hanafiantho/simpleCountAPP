import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Button from "reactstrap/lib/Button";

// CSS
import "./Login.css";

function Login() {
  return (
    <div className="container text-center">
      <Card className="mx-auto">
        <CardBody>
          <div>To use count apps, click Login button below</div>
          <Button color="primary" className="mt-4">Login</Button>
        </CardBody>
      </Card>
    </div>
  )
};

export default Login
