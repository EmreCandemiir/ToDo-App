import TaskCreate from '../components/TaskCreate';
import TaskList from '../components/TaskList';
import { useState } from 'react';
import { Task } from '../interfaces/Task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (title: string, taskDesc: string) => {
    setTasks([...tasks, { id: Math.round(Math.random() * 999999), title, taskDesc }]);
  };

  const deleteTaskById = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTaskById = (id: number, title: string, taskDesc: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, title, taskDesc } : task))
    );
  };

  return (
    <div className="container my-4">
      <TaskCreate onCreate={createTask} />
      <h1 className="mt-4">Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}