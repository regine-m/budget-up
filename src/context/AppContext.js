import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Use the spread operator to add the new item to the items array
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_ITEM':
      // Use the filter method to remove the item based on its id
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  items: [
    { id: 15, name: 'Salary', cost: 40000, isBudget: true },
    { id: 16, name: 'Investment', cost: 400, isBudget: true },
    { id: 14, name: 'Miscellaneous', cost: 50, isBudget: false },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state.items, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
