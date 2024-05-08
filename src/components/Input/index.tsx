import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

<<<<<<< HEAD
export function Input({ label, id, ...rest }: InputProps) {
=======
export function Input({ label, setState, ...rest }: InputProps) {
>>>>>>> 05c9ca6e3de73d34424757d45b13bac741de67d5


  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={label}>
        {label}
        <input
          type="text"
<<<<<<< HEAD
          name={id}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
=======
          name={label}
          id={label}
          onChange={({ currentTarget }) => setState(currentTarget.value)}
>>>>>>> 05c9ca6e3de73d34424757d45b13bac741de67d5
          {...rest}
        />
      </label>
    </div>
  )
}