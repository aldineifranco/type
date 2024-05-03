import { useState } from "react"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Checkbox } from "./components/Checkbox"

function App() {
  const [adicioinar, setAdicionar] = useState(0)

  function handleAdd() {
    setAdicionar((total) => total + 1)
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="font-bold text-lg mb-4">Button</h2>
        <p>{adicioinar}</p>
        <Button onClick={handleAdd} >Incrementar</Button>
      </div>

      <hr />

      <div>

        <h2 className="font-bold text-lg mb-4">Input</h2>
        <Input
          label="Nome: "
          id="name"
        />

        <Input
          label="E-mail: "
          id="input"
        />

        <Input
          label="De: "
          id="data_inicio"
          type="date"
        />

        <Input
          label="Até: "
          id="data_fim"
          type="date"
        />

        <Input
          label="Hora Viagem: "
          id="Hora"
          type="time"
        />


      </div>

      <hr />

      <div>
        <h2 className="font-bold text-lg mb-4">Checkbox</h2>
        <span className="shadow-xl p-3">
          <Checkbox label=" Termos e Condições" />
        </span>
        
      </div>


    </div>
  )
}

export default App
