import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ markDone, setUpdateData, deleteTask, toDo }) => {
    return(
      <>
        {/* Display toDo */}

        {toDo.length ? '' : 'No Tasks...' }

        {toDo?.sort((a,b) => a.id> b.id ? 1 : -1 )
        .map( (task, index) => {
          return(
              
              <div className="col taskBg" key={task.id}>

                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index+1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed/Not Completed" onClick={() => markDone(task.id) }>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                  </span>
                  { task.status ? null : (

                    <span title="Edit"
                    onClick={() => setUpdateData({

                      id: task.id,
                      title: task.title,
                      status: task.status ? true : false
                    })}>

                    <FontAwesomeIcon icon={faPen}/>
                  </span>
                  )}
                  
                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                  </span>
                </div>
              
              </div>

          )
        })
        }
      </> 
        
    )
}

export default ToDo;