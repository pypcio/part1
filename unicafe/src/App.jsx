import React, { useState } from "react";
const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};
const Paragraph = ({ value, text, znak }) => {
  return (
    <p>
      {text} {value} {znak}
    </p>
  );
};

const Statistics = (props) => {
  return (
    <React.Fragment>
      <h2>statistics</h2>
      <Paragraph value={props.good} text="good" />
      <Paragraph value={props.neutral} text="neutral" />
      <Paragraph value={props.bad} text="bad" />
      <Paragraph value={props.total} text="total" />
      <Paragraph value={props.average} text="average" />
      <Paragraph value={props.partGood * 100} text="positive" znak={"%"} />
    </React.Fragment>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [partGood, setPartGood] = useState(0);

  const handleGood = () => {
    const opinion = "good";
    const temp = good + 1;
    setGood(temp);
    const temp2 = temp + neutral + bad;
    setTotal(temp2);
    handleAverage(opinion, temp, temp2);
  };
  const handleNeutral = () => {
    const opinion = "neutral";
    const temp = neutral + 1;
    setNeutral(temp);
    const temp2 = temp + good + bad;
    setTotal(temp2);
    handleAverage(opinion, temp, temp2);
  };
  const handleBad = () => {
    const opinion = "bad";
    const temp = bad + 1;
    setBad(temp);
    const temp2 = temp + good + neutral;
    setTotal(temp2);
    handleAverage(opinion, temp, temp2);
  };
  const handleAverage = (realOpinion, opinionCount, realTotal) => {
    let suma;
    if (realOpinion === "good") {
      suma = opinionCount * 1 + neutral * 0 + bad * -1;
      setPartGood(opinionCount / realTotal);
    } else if (realOpinion === "neutral") {
      suma = good * 1 + opinionCount * 0 + bad * -1;
      setPartGood(good / realTotal);
    } else if (realOpinion === "bad") {
      suma = good * 1 + neutral * 0 + opinionCount * -1;
      setPartGood(good / realTotal);
    }
    const temp = suma / realTotal;
    setAverage(temp);
  };
  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={handleGood} text={"Good"} />
      <Button handler={handleNeutral} text={"Neutral"} />
      <Button handler={handleBad} text={"Bad"} />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        partGood={partGood}
      />
    </div>
  );
};

export default App;
