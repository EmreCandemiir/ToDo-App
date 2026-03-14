import TaskShow from './TaskShow';
import type { Task } from '../interfaces/Task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTitle: string, updatedTaskDesc: string) => void;
}

function TaskList({ tasks, onDelete, onUpdate }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
