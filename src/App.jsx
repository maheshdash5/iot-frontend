import './App.css'
import DeviceComponent from './components/DeviceComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListDeviceComponent from './components/ListDeviceComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element = { <ListDeviceComponent /> }></Route>
          {/* http://localhost:3000/devices */}
          <Route path='/devices' element = { <ListDeviceComponent /> }></Route>

          {/* http://localhost:3000/add-device */}
          <Route path='/add-device' element = { <DeviceComponent /> }></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
