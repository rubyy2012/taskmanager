import React from 'react'
import styles from './styles.module.scss';
import ListTasks from '../../../components/ListTasks/ListTasks';
import ListTasksApi from '../../../../api/ListTasksApi';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Avatar, AvatarGroup, Button } from '@mui/material';
import avatar from '../../../../assets/images/avatar.jpg';
import TaskDetail from '../../../components/task-detail/TaskDetail';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import { BsListTask } from 'react-icons/bs';
import myWorkspaces from '../../../../api/WorkspaceApi';
const ProjectContainer = () => {
  const cards = myWorkspaces.data.Workspace.cards;
  const [tabs,setTabs] = useState(cards);

  const HandleOnDragEnd = (result) => {
    const {source, destination} = result;
    if (!destination) {
      return;
    }
    if(destination.droppableId===source.droppableId&&
      destination.index===source.index)
      {
        return;
      }
    //handle
    const sourceColIndex = tabs?.findIndex(item=>item.id.toString()=== source.droppableId.toString());
    const desColIndex = tabs?.findIndex(e=>e.id.toString() === destination.droppableId.toString())
    //in the same column
    if(destination.droppableId===source.droppableId)
    {
      const sourceRowIdx = source.index;
      const desRowIdx = destination.index;
      const sourceCol = tabs[sourceColIndex];
      const sourceTasks = sourceCol.taskItems[sourceRowIdx];
      const destinationTasks = sourceCol.taskItems[desRowIdx];
      tabs[sourceColIndex].taskItems[desRowIdx] = sourceTasks;
      tabs[sourceColIndex].taskItems[sourceRowIdx] = destinationTasks;
      
      setTabs(tabs);
    }
    // different column
    if (destination.droppableId!==source.droppableId)
    {
      const sourceCol = tabs[sourceColIndex];
      const desCol = tabs[desColIndex];
      const sourceTasks = [...sourceCol.taskItems];
      const destinationTasks = [...desCol.taskItems];
      const [removed] = sourceTasks.splice(sourceTasks.index, 1);
      destinationTasks.splice(destinationTasks.index,0,removed);
      tabs[sourceColIndex].taskItems = sourceTasks;
      tabs[desColIndex].taskItems = destinationTasks;
      // console.log(destinationTasks)
      const newTab = tabs;
      setTabs(newTab);
    }
  }
  console.log(tabs);


  return (
    <div className={styles.project_container}>
        <div className={styles.side_tasks_container}>
          <div className={styles.side_tasks_header}>
            <div className={styles.project_members}>
              <div className={styles.project_name}>
                <span>Design Plan</span>
                <MdOutlineKeyboardArrowDown className={styles.drop_icon}/>
              </div>
              <div className={styles.members}>
                <AvatarGroup
                        className={styles.avatar_group}
                        sx={{
                            '& .MuiAvatar-root': { width:26, height:26, fontSize: 14 },
                          }}
                        spacing={-1}
                        max={6}>
                        <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                          <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                          <Avatar
                          className={styles.avatar}
                          src={avatar}
                          sx={{ width:26, height:26 }}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                        <Avatar
                          className={styles.avatar}
                          sx={{ width:26, height:26 }}
                          src={avatar}
                        />
                </AvatarGroup>
              </div>
            </div>
            <div className={styles.project_tools}>
                <Button 
                  className={styles.btn_add_member}
                  variant="contained">Add members</Button>
              </div>
          </div>
          <div className={styles.alltasks_container}>
            <DragDropContext onDragEnd={HandleOnDragEnd}>
                {
                  tabs?.map(tab=> (
                    <ListTasks 
                      id = {tab.id.toString()}
                      tag = {tab.name}
                      number = '8'
                      tasks = {tab?.taskItems}/>
                  ))
                }
                {/* <ListTasks 
                    id = 'Todos'
                    tag = 'Todos'
                    number = '8'
                    tasks = {ListTasksApi.Todos}
                />
                <ListTasks
                  id = 'InProgress'
                  tag = 'In Progress'
                  number = '3'
                  tasks = {ListTasksApi.InProgress}
                />
                <ListTasks
                  id = 'Completed'
                  tag = 'Completed'
                  number = '5'
                  key='4'
                  tasks = {ListTasksApi.Completed}
                /> */}
            </DragDropContext>
              
            </div>
      </div>
      
      {/* <div className={styles.detailtask_container}>
            <TaskDetail/>
      </div> */}
    </div>
  )
}
export default ProjectContainer;
