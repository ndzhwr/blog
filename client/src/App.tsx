import './App.css'
import './Scrolls.css'
import Landing from './pages/Landing '
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notfound from './components/Notfound'
import Blogs from './pages/Blogs'
import { Provider } from 'react-redux'
import store from './store'
import NewBlog from './pages/NewStory'
import UserProfile from './pages/UserProfile'
import SingleBlog from './pages/SingleBlog'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>

        <div className="App font-mine">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/new' element={<NewBlog />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/blogs/:id' element={<SingleBlog />} />
            <Route path='*' element={<Notfound />} />


          </Routes>
        </div>
      </Provider>

    </BrowserRouter>
  )
}

export default App
