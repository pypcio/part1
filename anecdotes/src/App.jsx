import React, { useState } from "react";
import "./App.css";

const Button = ({ handle, text }) => {
  return <button onClick={handle}>{text}</button>;
};
const ButtonVote = ({ vote }) => {
  return <button>Vote</button>;
};
const Div = ({ data }) => {
  console.log(data);
  return data.map((board) => {
    return <p>{`${Object.keys(board)} --->${Object.values(board)} `}</p>;
  });
};
const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [vote, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleVotes = () => {
    const temp = vote.map((element, index) => {
      if (index === selected) {
        return (element += 1);
      } else {
        return element;
      }
    });
    console.log(temp);
    setVotes(temp);
  };
  const generateRandomNumber = (maxRange) => {
    return Math.floor(Math.random() * maxRange);
  };
  const handleSelected = () => {
    const temp = generateRandomNumber(anecdotes.length);
    setSelected(temp);
  };
  return (
    <div>
      <h4>{anecdotes[selected]}</h4>
      <p>{`has ${vote[selected]} votes`}</p>
      <div className="buttons">
        <Button handle={handleSelected} text={"generate"} />
        <Button handle={handleVotes} text={"vote"} />
      </div>
    </div>
  );
};

export default App;
