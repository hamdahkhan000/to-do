const UpdateForm = ({ changeTask, updateTask, cancelUpdate, updateData }) => {
    return(
        
          /* Update Task */
          <div className="row">
            <div className="col">
              <input
              value={ updateData?.title  }
              onChange={(e) => changeTask(e)} 
              className="form-control form-control-lg"/>
            </div>
            <div className="col-auto">
              <button onClick={updateTask} className="btn btn-lg btn-success mr-20">Update</button>
              <button onClick={cancelUpdate}  className="btn btn-lg btn-warning">Cancel</button>
            </div>
          </div>
        
    )
}

export default UpdateForm;