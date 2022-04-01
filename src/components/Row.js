import React from "react";

const Row = ({ rows, setRows }) => {

  const updateChanged = (index, type) => (e) => {
    const newRow = [...rows]; // copying the old datas array
    // replace e.target.value with whatever you want to change it to
    if (type === "select") newRow[index] = {...newRow[index],opration: e.target.value };
    else if (type === "input") newRow[index] = {...newRow[index],value: e.target.value };
    else if (type === "click") {
      newRow[index] = newRow[index].enable
        ? {...newRow[index], enable: false }
        : {...newRow[index], enable: true };
    }
    setRows(newRow);
  };
  
 const handleDelete=(index)=>{
  const deleteRow =rows.splice(index,1);
  setRows(rows.filter(item => item !== deleteRow));
};

  let result = 0;
  const allRows = rows.map((row, index) => {
    
    if (row.enable && row.opration==="+")
     result+=parseInt(row.value);
     else if (row.enable && row.opration==="-")
     result-=parseInt(row.value);

    return (
      <form onSubmit={(e) => e.preventDefault()} key={index}>
        <label>{row.opration}</label>
        <select onChange={updateChanged(index, "select")}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          onChange={updateChanged(index, "input")}
          type="number"
          placeholder="enter number" />
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <button onClick={updateChanged(index, "click")}>
          {row.enable ? "Disable" : "Enable"}
        </button>
      </form>
    );
  });
  console.log(rows);
// console.log(rows.filter(({opration,enable}) => opration == "+" && enable ));
// console.log(rows.filter(({opration,enable}) => opration === "-" && enable ));
  return (
    <div>
      {allRows}  
      {result}   
    </div>
  );
};

export default Row;
