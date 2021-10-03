import React from "react";
import Welcome from "../screens/Welcome";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const Logout = (props) => {
  const deslogueame = async (e) => {
    await props.logOut();
  };

  deslogueame();

  return <Welcome />;
};

const mapDispatchToProps = {
  logOut: usersActions.logOut,
};

export default connect(null, mapDispatchToProps)(Logout);