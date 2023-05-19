import {
  CombinedButton,
  CombinedSectionTitle,
} from 'components/Combined/Combined';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import {
  FormStyled,
  FieldStyled,
  ErrorText,
  InputDiv,
  RadioButton,
  RadioLabel,
  RadioContainer,
  TaskFormList,
  ButtonContainer,
  TextAreaInput,
} from './TaskForm.styled';
import { TaskSchema } from 'validations/TaskFormValidation';

export const TaskForm = ({ onCancel, addNewOrUpdateTask, initialData, editTask }) => {
  const [changeDeadline, setChangeDeadline] = useState(
    initialData.expired_at ?? initialData.deadline
  );
  const [minDate, setMinDate] = useState(initialData.expired_at);
  const [taskStatus, setTaskStatus] = useState(initialData.status || 'to_do');
  const [taskPriority, setTaskPriority] = useState(initialData.priority || 'low');

  const handleSubmit = values => {
    const data = {
      title: values.title,
      description: values.description,
      priority: taskPriority,
      expired_at: changeDeadline,
      status: taskStatus,
    };

    if (taskStatus) {
      data.status = taskStatus;
    }

    if (values._id) {
      data.id = values._id
    }


    addNewOrUpdateTask({...data, expired_at: changeDeadline});
  };

  const handleChangePriority = (e) => {
      setTaskPriority(e.target.value);   
  }

    const handleChangeStatus = e => {
      setTaskStatus(e.target.value);
    };

  const onChange = e => {
    const value = e.target.value;
    setChangeDeadline(value);
    const newMinDate = new Date(value);
    const formattedDate = newMinDate.toISOString().slice(0, -8);
    setMinDate(formattedDate);
  };

  return (
    <Formik
      initialValues={initialData}
      onSubmit={handleSubmit}
      validationSchema={TaskSchema}
    >
      <FormStyled autoComplete="off">
        <CombinedSectionTitle>
          {editTask ? 'Edit Task' : 'Add Task'}
        </CombinedSectionTitle>
        <TaskFormList>
          <InputDiv>
            <ErrorText name="title" component="div" />
            <FieldStyled
              placeholder="Please enter a title"
              type="text"
              name="title"
            />
          </InputDiv>

          <InputDiv>
            <ErrorText name="description" component="div" />
            <Field
              as={TextAreaInput}
              placeholder="Please enter a description"
              name="description"
              id="description"
            />
          </InputDiv>


                   {editTask && (
              <RadioContainer>
                <ErrorText name="status" component="div" />
                <li>
                  <RadioButton
                    type="radio"
                    name="status"
                    id="to_do"
                    value="to_do"
                    checked={taskStatus === 'to_do'}
                    onChange={handleChangeStatus}
                  />
                  <RadioLabel htmlFor="to_do">To Do</RadioLabel>
                </li>
                <li>
                  <RadioButton
                    type="radio"
                    name="status"
                    id="in_progress"
                    value="in_progress"
                    checked={taskStatus === 'in_progress'}
                    onChange={handleChangeStatus}
                  />
                  <RadioLabel htmlFor="in_progress">In Progress</RadioLabel>
                </li>
                <li>
                  <RadioButton
                    type="radio"
                    name="status"
                    id="done"
                    value="done"
                    checked={taskStatus === 'done'}
                    onChange={handleChangeStatus}
                  />
                  <RadioLabel htmlFor="done">Done</RadioLabel>
                </li>
              </RadioContainer> )}

            <RadioContainer>
              <ErrorText name="priority" component="div" />
              <li>
                <RadioButton
                  type="radio"
                  name="priority"
                  value="low"
                  id="low"
                  checked={taskPriority === 'low'}
                  onChange={handleChangePriority}
                />
                <RadioLabel htmlFor="low">Low</RadioLabel>
              </li>
              <li>
                <RadioButton
                  type="radio"
                  name="priority"
                  id="middle"
                  value="middle"
                  checked={taskPriority === 'middle'}
                  onChange={handleChangePriority}
                />
                <RadioLabel htmlFor="middle">Middle</RadioLabel>
              </li>
              <li>
                <RadioButton
                  type="radio"
                  name="priority"
                  id="high"
                  value="high"
                  checked={taskPriority === 'high'}
                  onChange={handleChangePriority}
                />
                <RadioLabel htmlFor="high">High</RadioLabel>
              </li>
            </RadioContainer>

          <InputDiv>
            <ErrorText name="deadline" component="div" />
            <FieldStyled
              id="deadline"
              type="datetime-local"
              name="deadline"
              value={changeDeadline}
              min={minDate}
              onChange={onChange}
            />
          </InputDiv>
        </TaskFormList>
        <ButtonContainer>
          <CombinedButton type="submit">
            {editTask ? 'Save Changes' : 'Save'}
          </CombinedButton>
          <CombinedButton type="button" onClick={onCancel}>
            Cancel
          </CombinedButton>
        </ButtonContainer>
      </FormStyled>
    </Formik>
  );
};
