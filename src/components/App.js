import React, { useState } from "react";

import "./App.css";
import Row from "./Row";

function App({ resulRedux }) {
  const [rows, setRows] = useState([]);

  const addEntryRow = () => {
    setRows([
      ...rows,
      {
        value: 0,
        opration: "+",
        enable: true,
      },
    ]);
  };

  return (
    <>
      <button onClick={addEntryRow}>Add row</button>

      <Row rows={rows} setRows={setRows} />
    </>
  );
}

export default App;
