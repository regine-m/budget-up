import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const NetTotal = () => {
  const { items } = useContext(AppContext);

  const totalExpenses = items
    .filter((item) => !item.isBudget)
    .reduce((total, item) => {
      return (total += item.cost);
    }, 0);

  const totalBudget = items
    .filter((item) => item.isBudget)
    .reduce((total, item) => {
      return (total += item.cost);
    }, 0);

  const netTotal = totalBudget - totalExpenses;
  const textType = netTotal < 0 ? 'text-orange' : 'text-green';

  return (
    <div className='custom-card py-4 px-3 d-flex justify-content-between'>
      <span className='text-white'>Net Total: </span>
      <span className={`cash ${textType} fw-bold`}>₱{Intl.NumberFormat().format(netTotal)}</span>
    </div>
  );
};

export default NetTotal;
