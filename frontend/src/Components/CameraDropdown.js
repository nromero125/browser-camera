import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { useDispatch } from "react-redux";
import {setSelectedDevice} from '../actions/camera';

const CameraDropdown = ({devices}) => {
    const dispatch = useDispatch();

    const handleClick = (deviceId) => {
        dispatch(setSelectedDevice(deviceId));
    }

    const menu = (
        <Menu>
            {devices.map((device, key) => 
            <Menu.Item key={device.deviceId} onClick={() => handleClick(device.deviceId)}>
            <a href="#">{device.label || `Camera ${key + 1}`}</a>
          </Menu.Item>)}
        </Menu>
      );
      
      return(
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            Select camera <Icon type="down" />
          </a>
        </Dropdown>
      );
}

export default CameraDropdown;
