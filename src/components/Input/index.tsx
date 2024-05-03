import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'> & {
  label: string;
  id: string;
}

export function Input({label, id, ...rest }: InputProps) {
  

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>
        {label}
        <input type="text" name={id} id={id} {...rest} />
      </label>
    </div>
  )
}