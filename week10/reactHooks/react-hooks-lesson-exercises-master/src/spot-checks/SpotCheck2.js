import React, { useState } from "react";

export default function SpotCheck2() {
  const [isLoading, setisLoading] = useState(true);
  const [Lesson, setLesson] = useState({
    name: "React Hooks",
    completed: false,
    started: false,
  });
  const startLesson = () => {
    setLesson({ ...Lesson, started: true });
  };
  const finishLesson = () => {
    setLesson({ ...Lesson, completed: true });
  };
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2"></div>
      {isLoading ? (
        <h1>page is loading</h1>
      ) : (
        <div>
          <p>
            {Lesson.name} Lesson started? {Lesson.started.toString()} Lesson
            completed? {Lesson.completed.toString()}
          </p>
          <button onClick={startLesson}>Start Lesson</button>
          <button onClick={finishLesson}>Complete Lesson</button>
        </div>
      )}
    </div>
  );
}
