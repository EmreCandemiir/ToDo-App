/*import { useState } from "react";

function TaskCreate({ onCreate,task, taskFormUpdate ,onUpdate}) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
      onUpdate(task.id,title,taskDesc)
    }
    else{
      onCreate(title, taskDesc);
    }
    
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="task-create">
      {taskFormUpdate ? (
        <h3>Task Güncelle</h3>
      ) : (
        <h3>Task Ekleyiniz</h3>
      )}

      <form className="task-form" onSubmit={handleSubmit}>
        <label className="task-label">Başlık</label>
        <input
          value={title}
          onChange={handleChange}
          className="task-input"
        />

        <label className="task-label">Task Giriniz</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={5}
        />

        <button className="task-button">
          {taskFormUpdate ? "Güncelle" : "Oluştur"}
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
*/
import { useState } from 'react';

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle('');
    setTaskDesc('');
  };

  return (
    <div>
      {' '}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
             /* className="task-button update-button"
              onClick={handleSubmit}
            >*/ type="submit"
  className={`btn ${taskformUpdate ? 'btn-warning' : 'btn-success'}`} 
  onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
