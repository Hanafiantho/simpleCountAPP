import React from "react";
import {useSelector} from "react-redux";
import Login from "./modules/login/Login";
import Count from "./modules/count/Count";

function App() {
  const auth = useSelector(state => state.auth)

  return (
    <React.Fragment>
      {auth ? <Count /> : <Login />}
    </React.Fragment>
  )
};

export default App;