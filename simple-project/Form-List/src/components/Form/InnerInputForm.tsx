import { useState } from "react";
import { listData } from "./mockup";

export interface InnerInput {
  col: "col col-lg-4 col-sm-5 col-xs-12";
  name: string;
  type: "text";
  value: string | number;
  onchange1?: React.ChangeEventHandler<HTMLInputElement>;
}

function InnerInputForm({ col, name, type, value, onchange1 }: InnerInput) {
  const handleSave = () => { };
  const handleEdit = () => { };
  const handleCancel = () => { };
  return (
    <div className={col}>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <strong>
          <span>title: </span>
          <input
            onChange={onchange1}
            value={value}
            type={type}
            name={name}
          />
        </strong>
        <strong>
          <span>email: </span>
          <input
            onChange={onchange1}
            value={value}
            type={type}
            name="email"
          />
        </strong>
        <strong>
          <span>address: </span>
          <input
            onChange={onchange1}
            value={value}
            type={type}
            name={name}
          />
        </strong>
        <strong>
          <span>home: </span>
        </strong>
        <strong>
          <span>date: </span>
        </strong>
        <strong>
          <span>mobile: </span>
        </strong>
        <div>
          <button className="button" onClick={handleSave}>
            Save
          </button>
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="button" onClick={handleCancel}>
            cancel
          </button>
        </div>
      </label>
    </div>
  );
}

export default InnerInputForm;
