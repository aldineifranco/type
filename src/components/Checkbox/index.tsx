import React from "react";

type CheckboxProps = {
  label: string
}


export function Checkbox({ label }: CheckboxProps) {
  const [ value, setValue ] = React.useState(false);


  return (
    <label className="text-indigo-800 font-bold p-8">
      <input 
        type="checkbox" 
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
        className="checked: bg-indigo-700"
      />
      {label}
    </label>
  )
}