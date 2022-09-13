import React, { useEffect, useState } from "react";
import { fetchExpenses } from "../data/utils";

export default function Exercise3() {
  const [month, setMonth] = useState(0);
  const [expenses, setExpenses] = useState([
    {
      amount: "",
      date: "",
      group: "",
      item: "",
    },
  ]);
  const handleSelect = (e) => {
    setMonth(e.target.selectedIndex);
  };
  useEffect(() => {
    fetchExpenses(month).then((result) => {
      setExpenses(result);
    });
  }, [month]);
  useEffect(() => {
    fetchExpenses(0).then((result) => {
      setExpenses(result);
    });
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        {
          <select id="month" onChange={handleSelect}>
            {months.map((month) => {
              return <option>{month}</option>;
            })}
          </select>
        }
        {expenses.map((part) => {
          return (
            <div>
              <p>
                {part.amount} ----------- {part.date} --------------{" "}
                {part.group} ------------ {part.item}
              </p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}
