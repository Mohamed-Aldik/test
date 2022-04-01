import React, { useState } from "react";

import "./App.css";
import Row from "./Row";

function App({ resulRedux }) {
  const [rows, setRows] = useState([]);

  const addEntryRow = () => {
    setRows([
      ...rows,
      {
        id:'',
        value: 0,
        opration: "+",
        enable: true,
      },
    ]);
  };

  return (
    <div className="container mt-5" >
      <button type="button" className="btn mb-3 btn-primary btn-sm" onClick={addEntryRow}>Add row</button>
      <Row rows={rows} setRows={setRows} />
    </div>
  );
}

export default App;
