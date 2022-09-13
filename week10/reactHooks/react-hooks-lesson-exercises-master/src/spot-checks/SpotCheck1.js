import React from "react";
import { useState } from "react";
export default function SpotCheck1() {
  const [value, operation] = useState(0);
  const [user, setUser] = useState({ userNmae: "1", passWord: "1" });
  const setUserNameAndPassWord = (userNmae, passWord) => {
    let temp = { userNmae: userNmae, passWord: passWord };
    setUser(temp);
  };
  const increaseNumber = () => {
    operation(value + 1);
    setUserNameAndPassWord("oday", "0595");
  };
  const decreaseNumber = () => operation(value - 1);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <h1>{value}</h1>
        <h1>
          {user.userNmae} and
          {user.passWord}
        </h1>
        <button onClick={increaseNumber}>increase</button>
        <button onClick={decreaseNumber}>decrease</button>
      </div>
    </div>
  );
}
