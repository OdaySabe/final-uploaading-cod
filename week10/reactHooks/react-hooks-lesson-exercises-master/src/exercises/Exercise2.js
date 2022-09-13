import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Exercise2() {
  const [allUsers, setAllUsers] = useState([]);
  const [dataIWant, setDataIWant] = useState([{}]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((result) => {
      setAllUsers(result.data.results);
    });
  }, []);
  useEffect(() => {
    let temp = [{}];
    allUsers.map((user) => {
      temp.push({
        firstName: user.name.first,
        lastName: user.name.last,
        picture: user.picture.large,
      });
    });
    setDataIWant(temp);
  }, [allUsers]);
  useEffect(() => {
    //console.log(dataIWant);
  }, [dataIWant]);
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {dataIWant.map((user) => {
          return (
            <div>
              <h3>{user.firstName}</h3>
              <h3>{user.lastName}</h3>
              <img src={user.picture}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
