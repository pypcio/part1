import { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};
const Paragraph = ({ value, text }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={handleGood} text={"Good"} />
      <Button handler={handleNeutral} text={"Neutral"} />
      <Button handler={handleBad} text={"Bad"} />
      <h2>statistics</h2>
      <Paragraph value={good} text="good" />
      <Paragraph value={neutral} text="neutral" />
      <Paragraph value={bad} text="bad" />
    </div>
  );
};

export default App;
