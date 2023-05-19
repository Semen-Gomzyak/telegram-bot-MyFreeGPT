import { TaskItem } from './TaskItem';
import { ListTasks } from './TaskList.styled';

export const TaskList = ({ tasks, showEditTask, removeTask }) => {

  return (
    <ListTasks>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          showEditTask={showEditTask}
          removeTask={removeTask}
        ></TaskItem>
      ))}
    </ListTasks>
  );
};
