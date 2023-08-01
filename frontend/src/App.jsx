import './assets/css/App.css'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Display from './pages/Display'
import Admin from './pages/Admin'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
