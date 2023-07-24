import './App.css'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ticket from './components/Ticket'
import Display from './components/Display'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
          <Route path="/display" element={<Display />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
