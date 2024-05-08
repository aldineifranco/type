import { useEffect, useState } from "react"
import { Input } from "./components/Input"

type VendasProps = {
  id: number;
  nome: string;
  status: string;
}

function App() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [data, setData] = useState<VendasProps[]>([]);

  useEffect(() => {
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [inicio, fim])

  return (
    <div>

      <Input
        label="Data Inicial: "
        id="hora_inicial"
        type="date"
        value={inicio}
        onChange={({ currentTarget }) => setInicio(currentTarget.value)}
      />

      <Input
        label="Data Final: "
        id="hora_inicial"
        type="date"
        value={fim}
        onChange={({ currentTarget }) => setFim(currentTarget.value)}
      />

      <div>
        <p className="font-bold mb-4">Total de vendas: {data.length}</p>

        {data && data.map((venda) => (
          <div key={venda.id}>
            <p>{venda.nome} - {venda.status}</p>
          </div>
        ))}
      </div>

  
    </div>
  )
}

export default App
