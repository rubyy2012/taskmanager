import React from 'react'
import styles from './styles.module.scss';
import { useState } from 'react';
const CheckItem = ({checkClass}) => {
    const [check,setCheck] = useState(false);
  return (
    <li 
        onClick={()=>setCheck(!check)}
        className={`${check?styles.completed:''} ${styles.li_tag}`}>
          <p> Task 3</p>
          <div className={styles.item_option}>
            
          </div>
    </li>
  )
}
export default CheckItem;