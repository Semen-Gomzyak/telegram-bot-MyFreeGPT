import {
  CreatedAndEditWrapper,
  CreatedWrapper,
  DeadlineWrapper,
  DescriptionText,
  IdWrapper,
  Item,
  PriorityWrapper,
  StatusWrapper,
  TaskButton,
  TaskText,
  TaskTitle,
  TitleAndDescriptionWrapper,
  TopWrapper,
} from './TaskItem.styled';
import { CombinedButton } from 'components/Combined/Combined';

export const TaskItem = ({ task, showEditTask, removeTask }) => {
  const originalExpiredAt = task.expired_at;

  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString(
      'eu',
      options
    )}`;
  };

  const formatDateForInput = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleEditClick = () => {
    const deadline = formatDateForInput(new Date(originalExpiredAt));
    showEditTask({ ...task, expired_at: deadline });
  };

  return (
    <Item>
      <IdWrapper>
        <TaskText>ID: {task._id}</TaskText>
      </IdWrapper>

      <TopWrapper>
        <PriorityWrapper priority={task.priority}>
          <TaskText>{task.priority} </TaskText>
        </PriorityWrapper>
        <StatusWrapper status={task.status}>
          <TaskText>{task.status} </TaskText>
        </StatusWrapper>
        <DeadlineWrapper>
          <TaskText> DL: {formatDate(task.expired_at)} </TaskText>
        </DeadlineWrapper>
      </TopWrapper>
      <TitleAndDescriptionWrapper>
        <TaskTitle>Title: {task.title}</TaskTitle>
        <DescriptionText>Description: {task.description}</DescriptionText>
      </TitleAndDescriptionWrapper>
      <CreatedAndEditWrapper>
        <CreatedWrapper>
          <TaskText>Created: {formatDate(task.createdAt)}</TaskText>
        </CreatedWrapper>
        <TaskButton onClick={handleEditClick}>Edit</TaskButton>
        <CombinedButton onClick={() => removeTask(task._id)}>
          Delete
        </CombinedButton>
      </CreatedAndEditWrapper>
    </Item>
  );
};
