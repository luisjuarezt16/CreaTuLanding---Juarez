
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (

    <>
      <Navbar />

      <ItemListContainer greeting="Bienvenido" />

      <Home />

      <Footer />  
    </>

  )
}

export default App
