import {
  CombinedSectionTitle,
  CombinedButton,
} from 'components/Combined/Combined';
import { TaskCounter } from '../components/Tasks/TaskCounter';
import { TaskForm } from 'components/Tasks/TaskForm';
import { Modal } from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { addTask, deleteTask, getTask, updateTask } from 'api';
import { TaskList } from '../components/Tasks/TaskList';
import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';
import { TaskFilter } from 'components/Tasks/TaskFilter';
import { TaskSort } from 'components/Tasks/TaskSort';
import { TaskControlsWrapper } from 'components/Tasks/TaskFilter.styled';

export const Tasks = () => {
  const login = useContext(UserContext);
  const today = new Date().toISOString().split(':').slice(0, 2).join(':');
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [initialData, setInitialData] = useState({
    title: '',
    description: '',
    priority: 'low',
    deadline: today,
  });

  const [taskCount, setTaskCount] = useState({
    all: 0,
    todo: 0,
    inProgress: 0,
    done: 0,
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const params = {
        username: login,
      };
      const tasks = await getTask(params);
      setTasks(tasks);

      const count = {
        all: tasks.length,
        todo: tasks.filter(task => task.status === 'to_do').length,
        inProgress: tasks.filter(task => task.status === 'in_progress').length,
        done: tasks.filter(task => task.status === 'done').length,
      };
      setTaskCount(count);
    };

    fetchTasks();
  }, [login]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    document.body.classList.toggle('is-modal-open');
    setEditTask(false);
    setInitialData({
      title: '',
      description: '',
      priority: 'low',
      deadline: today,
    });
  };

  const addNewOrUpdateTask = async data => {
    if (editTask) {
      toggleModal();
      const response = await updateTask(data);
      setTasks(prevTasks =>
        prevTasks.map(task => (task._id === response._id ? response : task))
      );
      return setEditTask(false);
    }

    data.username = login;
    toggleModal();
    const response = await addTask(data);
    return setTasks(prevTasks => [response, ...prevTasks]);
  };

  const showEditTask = task => {
    setInitialData(task);
    setEditTask(true);
    setShowModal(true);
    document.body.classList.toggle('is-modal-open');
  };

  const removeTask = async id => {
    const response = await deleteTask(id);
    if (response.status === 200) {
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
    }
  };

  const handleSearch = async searchValue => {
    const params = {
      username: login,
      search: searchValue,
    };

    const filteredTasks = await getTask(params);
    setTasks(filteredTasks);
  };

  const handleFilter = async params => {
    const filteredTasks = await getTask(params);
    setTasks(filteredTasks);
  };

  const handleSort = async params => {
    const sortedTasks = await getTask(params);
    setTasks(sortedTasks);
  };

  return (
    <main>
      <CombinedSectionTitle>Tasks</CombinedSectionTitle>
      <SearchBox onChange={handleSearch}></SearchBox>
      <TaskControlsWrapper>
        <TaskFilter handleStatusFilter={handleFilter}></TaskFilter>
        <TaskSort handleSort={handleSort}></TaskSort>
        <CombinedButton onClick={toggleModal}>Add Task</CombinedButton>
      </TaskControlsWrapper>
      <TaskCounter taskCount={taskCount}></TaskCounter>
      <TaskList
        tasks={tasks}
        showEditTask={showEditTask}
        editTask={editTask}
        removeTask={removeTask}
      ></TaskList>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <TaskForm
            addNewOrUpdateTask={addNewOrUpdateTask}
            onCancel={toggleModal}
            initialData={initialData}
            editTask={editTask}
          />
        </Modal>
      )}
    </main>
  );
};
