import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UpdateForm from './Components/UpdateForm.jsx';
import AddTaskForm from './Components/AddTaskForm.jsx';
import ToDo from './Components/ToDo.jsx';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([])
  
  // Temp State
  const[newTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');

  //Add task
  const addTask = () =>{
    if(newTask) {
      setToDo([...toDo, { id: toDo.length + 1, title : newTask, status: false }])
      setNewTask('')
    }
  }

  // Delete task 
  const deleteTask = (id) => {
    setToDo(toDo.filter(task => task.id !== id))
  }

  // Mark task as done or completed 
  const markDone = (id) => {
    let completedTask = toDo.map( task => {
      if( task.id === id ) {
        return ({...task, status: !task.status })
      }
      return task;
    })
    setToDo(completedTask);
  }

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false 
    }
    setUpdateData(newEntry);
  }

  // Update Task
  const updateTask = () => {
    let filterRecord = toDo.filter(task => task.id !== updateData.id )
    let updatedObject = [...filterRecord,updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
  
  return (
    <div className="container App">
     
     <br/><br/>
     <h2>To Do List App (ReactJs)</h2>
     <br/><br/>

     {updateData  ? (
      <UpdateForm
      changeTask={changeTask}
      updateTask={updateTask}
      cancelUpdate={cancelUpdate}
      updateData={updateData}
      />
     ) : (
      <AddTaskForm
      setNewTask={setNewTask} 
      addTask={addTask}
      newTask={newTask}
      />      
     ) }

     <ToDo
     markDone={markDone}
     setUpdateData={setUpdateData} 
     deleteTask={deleteTask}
     toDo={toDo}
      />
    </div>
  );
}

export default App;
