import { ComponentProps } from "react";


type ButtonProps = ComponentProps<'button'> & {
  tamanho?: string;
}

export function Button({ tamanho, children, ...rest }: ButtonProps) {
  return (
    <button
      style={{ fontSize: tamanho }}
      {...rest}
    >
      {children}
    </button>
  )
}