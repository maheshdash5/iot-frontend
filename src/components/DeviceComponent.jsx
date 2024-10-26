import React, { useState } from 'react'
import { createDevice } from '../services/DeviceService';
import { useNavigate } from 'react-router-dom';

const DeviceComponent = () => {
    
    const [deviceName, setDeviceName] = useState('');
    const [devicPower, setDevicePower] = useState('');
    const [deviceUsage, setDeviceUsage] = useState('');
    const [deviceStatus, setDeviceStatus] = useState('');

    const navigator = useNavigate();
    
    function saveDevice(e){
        e.preventDefault();

        const device = {deviceName, devicPower, deviceUsage, deviceStatus}
        console.log(device);

        createDevice(device).then((response) =>{
            console.log("The response data is from component: " + response.data);
            navigator('/devices');
        })
        
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Device</h2>
                <div className='card-body'>
                    <form>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Device Name</label>
                            <input
                              type='text'
                              placeholder='Enter Device Name'
                              name='deviceName'
                              value={deviceName}
                              className='form-control'
                              onChange={(e) => setDeviceName(e.target.value)}
                              >
                              </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Device Power</label>
                            <input
                              type='text'
                              placeholder='Enter Device Power'
                              name='devicePower'
                              value={devicPower}
                              className='form-control'
                              onChange={(e) => setDevicePower(e.target.value)}
                              >
                              </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Device Usage</label>
                            <input
                              type='text'
                              placeholder='Enter Device Usage'
                              name='deviceUsage'
                              value={deviceUsage}
                              className='form-control'
                              onChange={(e) => setDeviceUsage(e.target.value)}
                              >
                              </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Device Status</label>
                            <input
                              type='text'
                              placeholder='Enter Device Status'
                              name='deviceStatus'
                              value={deviceStatus}
                              className='form-control'
                              onChange={(e) => setDeviceStatus(e.target.value)}
                              >
                              </input>
                        </div>

                        <button className='btn btn-success' onClick={saveDevice}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeviceComponent
