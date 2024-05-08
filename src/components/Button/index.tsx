import { ComponentProps } from "react";


type ButtonProps = ComponentProps<'button'> & {
  tamanho?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

<<<<<<< HEAD
export function Button({ tamanho, children, onClick, ...rest }: ButtonProps) {
=======
type ButtonPropsI = {
  incrementar: React.Dispatch<React.SetStateAction<number>>
}



export function Button({ tamanho, children, ...rest }: ButtonProps) {
  

>>>>>>> 05c9ca6e3de73d34424757d45b13bac741de67d5
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

export function ButtonI({ incrementar }: ButtonPropsI ) {
  return (
    <button onClick={() => incrementar((n) => n + 1)}>ADD</button>
  )
}

