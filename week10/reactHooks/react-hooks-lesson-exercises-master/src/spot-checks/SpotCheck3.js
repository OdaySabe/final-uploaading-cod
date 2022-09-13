import React, { useState, useEffect } from "react";

export default function SpotCheck3() {
  const [likes, setLikes] = useState(0);
  const makeLike = () => {
    setLikes(likes + 1);
  };
  useEffect(() => {
    console.log("page mounted");

    return function Unmounted() {
      console.log("page Unmounted");
      debugger;
    };
  }, []);
  useEffect(() => {
    document.getElementById("likes").innerHTML = likes;
  }, [likes]);

  return (
    <div className="ex-space">
      <h4 id="likes" className="ex-title"></h4>
      <div className="exercise" id="sc-3">
        <button onClick={makeLike}>LIKE</button>
      </div>
    </div>
  );
}
