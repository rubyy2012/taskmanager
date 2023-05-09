import React from 'react'
import styles from './styles.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import { useRef } from 'react';

  
const DueDate = ({setOpenCalendar}) => {
    const ref = useRef();
    useOnClickOutside(ref, () => setOpenCalendar(false));
  return (
    <div 
        ref={ref}
        className={styles.datetime_container}>
        <div className={styles.datetime_body}>
            <form action="">
                <div className={styles.date_container}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar 
                            className={styles.date_picker}
                        />
                    </LocalizationProvider>
                </div>
                <div className={styles.time_container}>
                    <span>Due at</span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker 
                            className={styles.custom_time_picker}
                            style ={{width:100}}
                            slotProps={{ textField: { size: 'small' } }}/>
                    </LocalizationProvider>
                </div>
                <div className={styles.submit_areas}>
                    <Button 
                        className={styles.btn_submit}
                        variant="contained">Save & Continue</Button>
                    <Button 
                        onClick = {()=>setOpenCalendar(false)}
                        className={styles.btn_cancel}
                        variant="outlined">Cancel</Button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default DueDate
