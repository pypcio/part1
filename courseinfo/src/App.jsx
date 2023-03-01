import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <React.Fragment>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </React.Fragment>
  );
};
const Part = ({ exercises, part }) => {
  return (
    <React.Fragment>
      <p>
        {part} {exercises}
      </p>
    </React.Fragment>
  );
};
const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises1: 10 };
  const part2 = { name: "Using props to pass data", exercises2: 7 };
  const part3 = { name: "State of a component", exercises3: 14 };

  return (
    <React.Fragment>
      <Header course={course} />
      <Content
        part1={part1.name}
        part2={part2.name}
        part3={part3.name}
        exercises1={part1.exercises1}
        exercises2={part2.exercises2}
        exercises3={part3.exercises3}
      />
      <Total
        exercises1={part1.exercises1}
        exercises2={part2.exercises2}
        exercises3={part3.exercises3}
      />
    </React.Fragment>
  );
};

export default App;
