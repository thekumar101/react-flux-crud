import React from "react";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="author">{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value || ""}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default SelectInput;
