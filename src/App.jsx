import Products from './components/Products'
import Nav from './components/Nav'
import { Routes,Route } from 'react-router-dom'
const App = () => {

 
  return (
    <div className='min-h-screen'>
      <Nav />
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
