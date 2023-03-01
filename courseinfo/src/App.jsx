import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({ parts }) => {
  return (
    <React.Fragment>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </React.Fragment>
  );
};
const Part = ({ part, exercises }) => {
  return (
    <React.Fragment>
      <p>{`${part} ${exercises}`}</p>
    </React.Fragment>
  );
};
const Total = ({ parts }) => {
  return (
    <div>
      <p>
        {`Number of exercises 
        ${parts[0].exercises + parts[1].exercises + parts[2].exercises}`}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <React.Fragment>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </React.Fragment>
  );
};

export default App;
