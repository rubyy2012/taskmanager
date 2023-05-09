import React from 'react'
import styles from './styles.module.scss';
import Task from '../Task/Task';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
const ListTasks = ({tag,number,tasks,id}) => {
  const [toggle,setToggle] = useState(false)
  // console.log('tasks',tasks)
  console.log('tasks',tasks)
  return (
        <div className={styles.listtasks_container}>      
          <div className={styles.listtasks_body}>
            <div 
              onClick = {()=>setToggle(!toggle)}
              className={styles.listtasks_title}>
                {
                  toggle? <IoIosArrowUp className={styles.dropdown_icon}/>
                  : <IoIosArrowDown className={styles.dropdown_icon}/>
                }
              <p className={styles.tag_name}>
                {tag}
              </p>
              <span>({number})</span>
            </div>
            {
              toggle&&
              <div className={styles.listtasks_content}>
                <Droppable droppableId={id}>
                {
                  (provided)=> (
                  <div 
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={styles.listtasks_group}>
                      {
                        tasks?.map((task,index)=>(
                          <Draggable
                            key={task.id}
                            index={index}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            draggableId={task.id.toString()}>
                                {
                                (provided) => (
                                <Task
                                  myref = {provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  task = {task}
                                  link = 'detail'
                                />
                                )
                              }
                        </Draggable>))
                      }
                      {provided.placeholder}
                    </div>
                )}
              </Droppable>
                <button 
                  className={styles.btn_Add_task}
                  type = 'submit'>
                    <IoIosAdd className={styles.icon_add}/>
                    Add Task
                </button>
            </div>
            }
            
          </div>
      </div>
  )
}
export default ListTasks;
