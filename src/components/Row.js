import React from "react";

const Row = ({ rows, setRows }) => {
  const updateChanged = (index, type) => (e) => {
    const newRow = [...rows]; // copying the old datas array
    // replace e.target.value with whatever you want to change it to
    if (type === "select")
      newRow[index] = { ...newRow[index], opration: e.target.value };
    else if (type === "input")
      newRow[index] = { ...newRow[index], value: e.target.value };
    else if (type === "click") {
      newRow[index] = newRow[index].enable
        ? { ...newRow[index], enable: false }
        : { ...newRow[index], enable: true };
    }
    setRows(newRow);
  };

  let result = 0;
  const allRows = rows.map((row, index) => {
    if (row.enable && row.opration === "+") result += parseInt(row.value);
    else if (row.enable && row.opration === "-") result -= parseInt(row.value);
    if (row.id === "") row.id = index;

    return (
      <form
        className="d-flex w-50 p-3 align-items-center justify-content-between"
        onSubmit={(e) => e.preventDefault()}
        key={row.id}
      >
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupSelect01">
            Options
          </label>
          <select
            onChange={updateChanged(index, "select")}
            className="form-select-sm"
            id="inputGroupSelect01"
          >
            <option value="+">+</option>
            <option value="-">-</option>
          </select>

          <input
            className="ms-2 form-control"
            aria-label="Text input with segmented dropdown button"
            onChange={updateChanged(index, "input")}
            type="number"
            disabled={row.enable ? "" : "disabled"}
            placeholder="enter number"
          />
      
        <button
          type="button"
          className="ms-2 btn btn-danger"
          onClick={() => {
            setRows(rows.filter((o, i) => index !== i));
          }}
        >
          Delete
        </button>
        <button
          className={`ms-2 btn btn-${row.enable ? "warning" : "secondary"}`}
          onClick={updateChanged(index, "click")}
        >
          {row.enable ? "Disable" : "Enable"}
        </button>
        </div>
      </form>
    );
  });

  return (
    <div>
      {allRows}
      <p className="fs-3"> Result: {result}</p>
    </div>
  );
};

export default Row;
