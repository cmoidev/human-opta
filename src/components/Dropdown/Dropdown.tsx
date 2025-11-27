import * as React from "react";

function Dropdown({
  options,
  onChange,
}: {
  options: string[];
  onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

export default Dropdown;
