import { useState } from 'react'
import './App.css'
import { Button, Button2, Card, Card1 } from './component/Demo1'
import { List } from './component/Demo2'
import { Layout } from './component/Layout'
import { Badge } from './component1/lab1'
import { Modal } from './component1/lab2'
import { ToggleSwitch } from './component1/lab3'
import { NumericStepper } from './component1/lab4'
import Lab1 from './component1/lab5'
import Lab6 from './component1/lab6'
import Lab7 from './component1/lab7'
import Lab8 from './component1/lab8'
import Lab9 from './component1/lab9'
import Lab10 from './component1/lab10'
import Lab11 from './component1/lab11'
import Lab12 from './component1/lab12'

function App() {
  const [modelOpen, setModalOpen] = useState<boolean>(false)
  console.log(modelOpen)
  return (
    <>
      <div>
        Home
      </div>
      <Button label='click1' onClick={() => alert("Hi")} />
      <Button2 label='click2' onClick={() => alert("Hi 2nd")} />
      <Layout>
        <Card title='content' description='Hello CC20' />
        <Card1 title='content' description='Hello CC21' />
      </Layout>

      <Modal isOpen={modelOpen}>
        <div>
          <List
            items={["apple", "banana", "orange"]}
            render={(item) => <span>{item.toUpperCase()}</span>}
          />
          <List
            items={[1, "two", 3] as (number | string)[]} // T = number | string
            render={(v) => <span>{typeof v === "number" ? v.toFixed(0) : v.toUpperCase()}</span>}
          />

          <List<number> items={[]} render={(n) => <span>{n}</span>} />
          {/* หรือ */}
          <List items={[] as number[]} render={(n) => <span>{n}</span>} />
          <Badge label='New' variant="primary" />
        </div>

      </Modal>
      <button onClick={() => setModalOpen((prv) => !prv)}>
        close
      </button>
      <ToggleSwitch />


      <NumericStepper min={0} max={5} />
      <NumericStepper min={-5} max={5} />
      <NumericStepper />

      <Lab1 />
      <Lab6 />
      <Lab7 />
      <Lab8 />
      <Lab9 />
      <Lab10 />
      <Lab11 />
      <Lab12 />
    </>
  )
}

export default App