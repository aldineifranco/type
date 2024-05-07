import { ComponentProps } from "react";


type ButtonProps = ComponentProps<'button'> & {
  tamanho?: string;
}

type ButtonPropsI = {
  incrementar: React.Dispatch<React.SetStateAction<number>>
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

export function ButtonI({ incrementar }: ButtonPropsI ) {
  return (
    <button onClick={() => incrementar((n) => n + 1)}>ADD</button>
  )
}

