import { useState } from 'react';
import React, { useContext } from 'react';
import { UserContext } from 'components/UserContext';
import { CombinedOption } from 'components/Combined/Combined';
import { SortSelected } from './TaskSort.styled';

export const TaskSort = ({ handleSort }) => {
  const login = useContext(UserContext);
  const [selectedSort, setSelectedSort] = useState('');

  const handleSelectedSort = value => {
    const params = {
      username: login,
      sort: value,
    };
    setSelectedSort(value);
    handleSort(params);
  };

  return (
    <SortSelected
      value={selectedSort}
      onChange={e => handleSelectedSort(e.target.value)}
    >
      <CombinedOption value="">Sort</CombinedOption>
      <CombinedOption value="newest">New</CombinedOption>
      <CombinedOption value="oldest">Old</CombinedOption>
      <CombinedOption value="az">A-Z</CombinedOption>
      <CombinedOption value="za">Z-A</CombinedOption>
    </SortSelected>
  );
};
