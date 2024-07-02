import './App.css'
import Home from './Component/Home/Home'
import { Route,Routes,Navigate } from 'react-router-dom'
import Callback from './Component/Callback/CallBack'
import Register from './Component/Register/Register'


function App() {
  const token = window.localStorage.getItem("token");

  return (
    <>  
      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" /> : <Register />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/home/*" element={token ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App