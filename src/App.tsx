import { useEffect, useState } from "react"
import { Button, ButtonI } from "./components/Button"
import { Input } from "./components/Input"
import './index.css'


type User = {
  nome: string
  profissão: string
}


function App() {
  const [adicioinar, setAdicionar] = useState(0);
  const [data, setData] = useState<null | User>(null)
  const [ total , setTotal ] = useState(0)

  function user() {
    return {
      nome: "Aldinei",
      profissão: "Dev"
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setData(user())
    }, 1000)
  }, [])


  function handleAdd() {
    setAdicionar((total) => total + 1)
  }

  return (
    <div>
      <div>
        Total : {total}
        <ButtonI incrementar={setTotal}/>
      </div>
      <div>
        {data !== null && <div>{data.nome} - {data.profissão}</div>}
      </div>
      <div>
        <h2 className="text-red-600">Button</h2>
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
