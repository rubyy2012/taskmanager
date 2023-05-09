import React, { useState } from 'react'
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import Menu from '../menu/Menu';
const SideBar = () => {

    const [toggle,setToggle] = useState(false);
  const handleToggleBar = () => {

  }
  return (
            
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_body}>
            <div className={styles.logo_area}>
                <DataSaverOffIcon
                    onClick = {handleToggleBar}
                    className={`${styles.logoIcon} ${toggle?styles.adjust:''}`}
                />
            </div>   
            <Menu />
        </div>
        {/* <div className={styles.sidebar_logout}>
            <div className={styles.logout_wrapper}>
                <LogoutIcon/>
            </div>
        </div> */}
        {/* <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
           
            <Menu/>
          
        </Drawer> */}
    </div>
  )
}
export default SideBar;
