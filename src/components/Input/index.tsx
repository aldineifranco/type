import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({ label, setState, ...rest }: InputProps) {


  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>
        {label}
        <input
          type="text"
          name={label}
          id={label}
          onChange={({ currentTarget }) => setState(currentTarget.value)}
          {...rest}
        />
      </label>
    </div>
  )
}