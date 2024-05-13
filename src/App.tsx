import { useEffect, useState } from 'react'
import { Input } from './components/Input'
import './index.css'

type Vendas = {
  id: string;
  nome?: string;
  preco?: string;
  status?: string;
}


function App() {
  const [inicio, setInicio] = useState('')
  const [fim, setFim] = useState(new Date().toISOString().slice(0, 10))
  const [checked, setChecked] = useState<string[]>([])
  const [data, setData] = useState<null | Vendas[]>(null)

  useEffect(() => {
    if (inicio !== '' && fim !== '') {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`)
        .then(response => response.json())
        .then((json: Vendas[]) => {
          if (checked.length > 0) {
            const filteredData = json.filter(item => checked.includes(item.status as string))
            setData(filteredData)
          } else {
            setData(json)
          }
        })
    }
  }, [inicio, fim, checked])

  function toggleCheckbox(value: string) {
    if (checked.includes(value)) {
      setChecked(checked.filter(item => item !== value))
    } else {
      setChecked([...checked, value])
    }
  }

  return (
    <div>
      <div className=''>
        <Input type='date' label='De: ' id='data-inicio' value={inicio} setState={setInicio} />
        <Input type='date' label='De: ' id='data-inicio' value={fim} setState={setFim} />
      </div>

      <div>
        <label htmlFor='processando'>
          <input
            type="checkbox"
            id="processando"
            value={checked}
            checked={checked?.includes('processando')}
            onChange={() => toggleCheckbox('processando')}
          />
          Processando
        </label>

        <label htmlFor='pago'>
          <input
            type="checkbox"
            id="pago"
            value={'pago'}
            checked={checked?.includes('pago')}
            onChange={() => toggleCheckbox('pago')}
          />
          Pago
        </label>
      </div>

      <div>
        Quantidade: {data?.length}
      </div>

      <table className='table-fixe border-spacing-2 border border-slate-500'>
        <thead>
          <tr>
            <th className='border border-slate-600 text-left w-[150px] bg-gray-100'>Vendas</th>
            <th className='border border-slate-600 text-left w-[150px] bg-gray-100'>Status</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((x) => (
            <tr key={x.id}>
              <td className="border border-slate-700">{x.nome}</td>
              <td className="border border-slate-700">{x.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
