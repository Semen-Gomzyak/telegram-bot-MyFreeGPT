import { useState } from 'react';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { CombinedOption } from 'components/Combined/Combined';
import { FilterSelect } from './TaskFilter.styled';

export const TaskFilter = ({ handleStatusFilter }) => {
  const login = useContext(UserContext);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSelectFilter = value => {
    const params = { username: login };

    if (value === 'all') {
      setSelectedFilter(value);
    }
    if (value === 'to_do' || value === 'in_progress' || value === 'done') {
      setSelectedFilter(value);
      params.status = value;
    }

    if (value === 'low' || value === 'middle' || value === 'high') {
      setSelectedFilter(value);
      params.priority = value;
    }

    handleStatusFilter(params);
  };

  return (
    <FilterSelect
      value={selectedFilter}
      onChange={e => handleSelectFilter(e.target.value)}
    >
      <CombinedOption value="all">All</CombinedOption>
      <CombinedOption value="to_do">To Do</CombinedOption>
      <CombinedOption value="in_progress">In Progress</CombinedOption>
      <CombinedOption value="done">Done</CombinedOption>
      <CombinedOption value="low">Low</CombinedOption>
      <CombinedOption value="middle">Middle</CombinedOption>
      <CombinedOption value="high">High</CombinedOption>
    </FilterSelect>
  );
};
