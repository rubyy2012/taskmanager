import React from 'react'
import styles from './styles.module.scss'
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TimelineIcon from '@mui/icons-material/Timeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuItem from '../MenuItem/MenuItem';
const Menu = (props) => {
  return (
    <div className={styles.side_bar_group}>
        <div className={styles.upcoming_projects}>
            <p className={styles.day_item}>
                <div className={styles.day_item_left}>
                    <QueryBuilderIcon className={`${styles.add_icon} ${styles.today_icon}`}/>
                    <p>Today</p>
                </div>

                <div className={styles.day_item_right}>
                   <span>3</span>
                </div>
            </p>

            <p className={styles.day_item}>
                <div className={styles.day_item_left}>
                    <HourglassTopIcon className={`${styles.add_icon} ${styles.upcoming_icon}`}/>
                    <p>Upcoming</p>
                </div>
                <div className={styles.day_item_right}>
                   <span>3</span>
                </div>
            </p>
        </div>

        <div className={styles.workspaces_container}>
            <div className={styles.workspaces}>
                <p>Your workspaces</p>
                <div className={styles.options}>
                    <MoreHorizIcon className={styles.workspace_icon}/>
                    <AddIcon className={styles.workspace_icon}/>
                </div>
            </div>
            <div className={styles.list_menu_container}>
                <ul className={styles.list_menu_ul}>
                    <MenuItem
                        itemIcon = {<GridViewIcon className={styles.dashboard_icon}/>}
                        itemText = 'Dashboard'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'All projects',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 2,
                                    title: 'Overviews',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 3,
                                    title: 'Create project',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }
                            ]
                        }}
                    />

                    <MenuItem
                        itemIcon = {<AccountTreeIcon  className={styles.allprojects_icon}/>}
                        itemText = 'All projects'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'All projects',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 2,
                                    title: 'Overviews',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 3,
                                    title: 'Create project',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }
                            ]
                        }}
                    />  

                    <MenuItem
                        itemIcon = {<TimelineIcon  className={styles.timelines_icon}/>}
                        itemText = 'Timelines'
                        dropDownIcon = {<KeyboardArrowDownIcon  className={styles.dropdown_icon}/>}
                        listItems = {{
                            data:[
                                {
                                    id: 1,
                                    title: 'All projects',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 2,
                                    title: 'Overviews',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                },
                                {
                                    id: 3,
                                    title: 'Create project',
                                    icon : <KeyboardArrowDownIcon/>,
                                    link: 'user/all-projects'
                                }
                            ]
                        }}
                    />  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default React.forwardRef(Menu);
