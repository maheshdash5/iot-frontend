import React, {useEffect, useState} from 'react'
import { listDevices } from '../services/DeviceService'
import { useNavigate } from 'react-router-dom'



const ListDeviceComponent = () => {
    const [devices, setDevices] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listDevices().then((response) =>{
            setDevices(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    function addNewDevice(){
      navigator('/add-device')
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List Of Devices</h2>
      <button className='btn btn-primary mb-2' onClick={addNewDevice}>Add Device</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Device Id</th>
                <th>Device Name</th>
                <th>Device Power</th>
                <th>Device Usage</th>
                <th>Device Status</th>
            </tr>
        </thead>
        <tbody>
                {
                    devices.map(device =>
                        <tr key={device.id}> 
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.power}</td>
                        <td>{device.usage}</td>
                        <td>{device.status}</td>
                        </tr>
                    )
                }  
        </tbody>
      </table>
    </div>
  )
}

export default ListDeviceComponent
