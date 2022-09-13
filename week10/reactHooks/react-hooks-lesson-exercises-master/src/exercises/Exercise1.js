import React, { useEffect, useState } from "react";

export default function Exercise1() {
  const [user, setUser] = useState({ name: "", city: "", country: "" });
  const handleChange = (e) => {
    const temp = { ...user };
    temp[e.target.id] = e.target.value;
    setUser(temp);
  };
  const handleSelect = (e) => {
    const temp = { ...user };
    temp["country"] = e.target.options[e.target.selectedIndex].value;
    setUser(temp);
  };
  useEffect(() => {
    console.log(user);
  });
  const countries = ["united states", "china", "united kingdom", "australia"];
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input
          id="name"
          type="text"
          placeholder="UserName"
          onChange={handleChange}
        ></input>
        <input
          id="city"
          type="text"
          placeholder="UserCity"
          onChange={handleChange}
        ></input>
        <select id="country" onChange={handleSelect}>
          {countries.map((country) => {
            return <option>{country}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
