import { useState } from 'react';
import TaskCreate from './TaskCreate';
import type { Task } from '../interfaces/Task';

interface TaskShowProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTitle: string, updatedTaskDesc: string) => void;
}

function TaskShow({ task, onDelete, onUpdate }: TaskShowProps) {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleDeleteClick = (): void => {
    onDelete(task.id);
  };

  const handleEditClick = (): void => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, updatedTitle: string, updatedTaskDesc: string): void => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
