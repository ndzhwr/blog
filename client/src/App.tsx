import './App.css'
import Button from '@mui/material/Button'
import  Navbar  from './components/Navbar'
import Landing from './components/Landing '

const App : React.FC = () => {

  return (
    <div className="App font-mine">
      <Navbar />
      <Landing />
    </div>
  )
}

export default App
