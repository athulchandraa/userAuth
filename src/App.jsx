import { Route, Routes } from 'react-router-dom'
import './App.css'
import Userlogin from './Components/Userlogin'
import Userregistration from './Components/Userregistration'
import Dashboard from './Components/Dashboard'
import { Toaster } from 'react-hot-toast'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Userlogin/>}/>
      <Route path='/reg' element={<Userregistration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </>
  )
}

export default App
