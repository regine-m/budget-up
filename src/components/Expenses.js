import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { items } = useContext(AppContext);

  const totalExpenses = items
    .filter((item) => !item.isBudget)
    .reduce((total, item) => {
      return (total += item.cost);
    }, 0);

  return (
    <div className='custom-card py-4 px-3 d-flex justify-content-between'>
      <span className='text-white'>Total Expenses: </span>
      <span className='cash text-orange fw-bold'>-₱{Intl.NumberFormat().format(totalExpenses)}</span>
    </div>
  );
};

export default ExpenseTotal;
