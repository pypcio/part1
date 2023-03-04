import React, { useState } from "react";

import "./App.css";
const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};
const Tr = ({ row }) => {
  const rowArray = row.map((element, i) => {
    return <td key={element.toString()}> {element}</td>;
  });
  return <tr>{rowArray}</tr>;
};
const Tbody = (list) => {
  const test = Object.values(list.dataTable).filter((value) => value !== 0);
  return test.length !== 0 ? (
    <tbody>{list.children}</tbody>
  ) : (
    <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
    </tbody>
  );
};
function App() {
  const [dataTable, setDataTable] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    partGood: 0,
  });

  const handleGood = () => {
    const tempGood = dataTable.good + 1;
    const tempTotal = dataTable.total + 1;
    const tempAverage =
      (tempGood * 1 + dataTable.neutral * 0 + dataTable.bad * -1) / tempTotal;
    const tempPartGood = tempGood / tempTotal;
    const newData = {
      ...dataTable,
      good: tempGood,
      total: tempTotal,
      average: tempAverage,
      partGood: tempPartGood,
    };
    setDataTable(newData);
  };
  const handleNeutral = () => {
    const tempNeutral = dataTable.neutral + 1;
    const tempTotal = dataTable.total + 1;
    const tempAverage =
      (dataTable.good * 1 + tempNeutral * 0 + dataTable.bad * -1) / tempTotal;
    const tempPartGood = dataTable.good / tempTotal;
    const newData = {
      ...dataTable,
      neutral: tempNeutral,
      total: tempTotal,
      average: tempAverage,
      partGood: tempPartGood,
    };
    setDataTable(newData);
  };
  const handleBad = () => {
    const tempBad = dataTable.bad + 1;
    const tempTotal = dataTable.total + 1;
    const tempAverage =
      (dataTable.good * 1 + dataTable.neutral * 0 + tempBad * -1) / tempTotal;
    const tempPartGood = dataTable.good / tempTotal;
    const newData = {
      ...dataTable,
      bad: tempBad,
      total: tempTotal,
      average: tempAverage,
      partGood: tempPartGood,
    };
    setDataTable(newData);
  };
  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={handleGood} text={"Good"} />
      <Button handler={handleNeutral} text={"Neutral"} />
      <Button handler={handleBad} text={"Bad"} />
      <h2>Statistics</h2>
      <table>
        <Tbody dataTable={dataTable}>
          <Tr row={["good", dataTable.good]} />
          <Tr row={["neutral", dataTable.neutral]} />
          <Tr row={["bad", dataTable.bad]} />
          <Tr row={["total", dataTable.total]} />
          <Tr row={["average", dataTable.average]} />
          <Tr row={["positive", `${dataTable.partGood * 100}%`]} />
        </Tbody>
      </table>
    </div>
  );
}

export default App;
