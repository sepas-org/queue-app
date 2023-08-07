import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Admin, Display, Form, Login } from './pages'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
