import { useState } from 'react';
import type { Task } from '../interfaces/Task';

interface TaskCreateProps {
  onCreate?: (title: string, taskDesc: string) => void;
  task?: Task;
  taskformUpdate?: boolean;
  onUpdate?: (id: number, updatedTitle: string, updatedTaskDesc: string) => void;
}

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }: TaskCreateProps) {
  const [title, setTitle] = useState<string>(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState<string>(task ? task.taskDesc : '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (taskformUpdate && onUpdate && task) {
      onUpdate(task.id, title, taskDesc);
    } else if (onCreate) {
      onCreate(title, taskDesc);
    }
    setTitle('');
    setTaskDesc('');
  };

  return (
    <div>
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
              type="submit"
              className="btn btn-warning"
              onClick={handleSubmit}
            >
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
