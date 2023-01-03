import React, { getState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGreeting } from "../config";
import store from "../store";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(loadGreeting);
  }, []);
  return (
    <div>
      <h1>Random message:</h1>
      <h4>{message}</h4>
    </div>
  );
};

export default Greeting;
