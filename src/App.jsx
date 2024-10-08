import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </main>
  )
}

export default App
