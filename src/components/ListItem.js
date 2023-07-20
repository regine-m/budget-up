import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ListItem = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item.id,
    });
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {item.name}
      <div>
        <span className={`badge cash rounded-pill ${item.isBudget ? 'bg-success' : 'bg-danger'} mr-3`}>
          {item.isBudget ? '+ ' : '- '}
          ₱{Intl.NumberFormat().format(item.cost)}
        </span>
        <TiDelete size='1.5em' onClick={handleDeleteItem} />
      </div>
    </li>
  );
};

export default ListItem;
