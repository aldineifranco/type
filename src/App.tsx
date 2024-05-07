import { useEffect, useState } from "react"

import './index.css'
import { Input } from "./components/Input"

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
}


function App() {
  const [ inicio, setInicio ] = useState('');
  const [ final, setFinal ] = useState('');
  const [ data, setData ] = useState<null | Venda[]>(null)


  useEffect(() => {
    if(inicio !== '' && final !== '') {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
      .then(response => response.json())
      .then(json => setData(json as Venda[]))
      .catch(error => console.log(error))
    }
  }, [inicio, final]);


  return (
    <div>
      <div>
        <Input label="Início" type="date" value={inicio} setState={setInicio} />
        <Input label="Final" type="date" value={final} setState={setFinal} />
      </div>

      <div>
        <p>De: {inicio}</p>
        <p>Até: {final}</p>
      </div>

      <p>Total de Vendas: {data?.length}</p>
      <table>
        <thead>
          <tr>
            <th style={{ width: '200px' }}>Venda</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((d) => (
            <tr key={d.id}>
              <td style={{ width: '200px' }}>{d.nome}</td>
              <td>{d.status}</td>
            </tr>
        ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default App
