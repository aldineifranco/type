import { ComponentProps } from "react";


type ButtonProps = ComponentProps<'button'> & {
  tamanho?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ tamanho, children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      style={{ fontSize: tamanho }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}