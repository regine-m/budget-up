import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetTotal = () => {
  const { items } = useContext(AppContext);

  const totalBudget = items
    .filter((item) => item.isBudget)
    .reduce((total, item) => {
      return (total += item.cost);
    }, 0);

  return (
    <div className='custom-card py-4 px-3 d-flex justify-content-between'>
      <span className='text-white'>Budget/Income: </span>
      <span className='cash text-green fw-bold'>+ ₱{Intl.NumberFormat().format(totalBudget)}</span>
    </div>
  );
};

export default BudgetTotal;
