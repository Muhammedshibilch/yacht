import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import UsedYacht from './pages/UsedYacht'
import NewYacht from './pages/NewYacht'
import Services from './pages/Services'
import Tradefairs from './pages/Tradefairs'
import Refernces from './pages/Refernces'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/usedyacht' element={<UsedYacht/>}/>
      <Route path='/newyacht' element={<NewYacht/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/tradefairs' element={<Tradefairs/>}/>
      <Route path='/references' element={<Refernces/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    <Footer/>
    </>
  )
}

export default App
