import { TaskCounterText, TaskCounterWrapper } from './TaskConter.styled';

export const TaskCounter = ({ taskCount }) => {
  return (
    <TaskCounterWrapper>
      <TaskCounterText>All: {taskCount?.all} </TaskCounterText>
      <TaskCounterText>To Do: {taskCount?.todo} </TaskCounterText>
      <TaskCounterText>In progress: {taskCount?.inProgress} </TaskCounterText>
      <TaskCounterText>Done: {taskCount?.done} </TaskCounterText>
    </TaskCounterWrapper>
  );
};
