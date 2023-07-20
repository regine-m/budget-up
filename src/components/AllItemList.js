import React, { useContext } from 'react';
import ListItem from './ListItem';
import { AppContext } from '../context/AppContext';

const AllItemList = () => {
  const { items } = useContext(AppContext);

  const allItems = items.sort((a, b) => a.id - b.id);

  return (
    <ul className='list-group mt-4'>
      {allItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default AllItemList;
