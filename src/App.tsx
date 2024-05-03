import { useState } from "react"
import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {
  const [adicioinar, setAdicionar] = useState(0)

  function handleAdd() {
    setAdicionar((total) => total + 1)
  }

  return (
    <div>
      <div>
        <h2>Button</h2>
        <p>{adicioinar}</p>
        <Button onClick={handleAdd} >Incrementar</Button>
      </div>

      <hr />

      <div>

        <h2>Input</h2>
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
    </div>
  )
}

export default App
