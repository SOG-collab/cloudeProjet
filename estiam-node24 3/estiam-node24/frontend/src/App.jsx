import './App.css'
import Site from './containers/Site/Site'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route path="*" element={<Site />} />
          </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
