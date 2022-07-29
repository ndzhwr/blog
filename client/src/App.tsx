import './App.css'
import Button from '@mui/material/Button'
import Navbar from './components/Navbar'
import Landing from './components/Landing '
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notfound from './components/Notfound'
import Blogs from './components/Blogs'
import {Provider } from 'react-redux'


const App: React.FC = () => {

  return (
    <BrowserRouter>

      <div className="App font-mine">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/blogs' element={<Blogs />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
