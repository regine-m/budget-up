import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import './components.css';

const AddItem = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [isBudget, setIsBudget] = useState(true);
  const handleBudgetChange = () => {
    setIsBudget(true);
  };

  const handleExpenseChange = () => {
    setIsBudget(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
      isBudget: isBudget,
    };

    dispatch({
      type: "ADD_ITEM", // Use a generic ADD_ITEM type
      payload: item,
    });

    // Reset the form fields after submission
    setName("");
    setCost("");
    setIsBudget(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
        <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="budgetOrExpenses"
              id="addToBudget"
              checked={isBudget}
              onChange={handleBudgetChange}
            />
            <label className="form-check-label text-white" htmlFor="addToBudget">
              Budget
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="budgetOrExpenses"
              id="addToExpenses"
              checked={!isBudget}
              onChange={handleExpenseChange}
            />
            <label className="form-check-label text-white" htmlFor="addToExpenses">
              Expenses
            </label>
          </div>
          <br></br>
          
          {isBudget ? (
              <input
              required="required"
              type="text"
              className="form-control mt-3"
              id="name"
              placeholder="Item Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          ) : (
            // <label className="text-white" htmlFor="name">Item Name</label>
            <select
              required
              className="form-select mt-3"
              value={name}
              onChange={(event) => setName(event.target.value)}
            >
              <option selected>Select Expense Category:</option>
              <option value="Utilities">Utilities</option>
              <option value="Transportation">Transportation</option>
              <option value="Food">Food</option>
              <option value="Debt Payments">Debt Payments</option>
              <option value="Insurance">Insurance</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Education">Education</option>
              <option value="Entertainment/Recreation">Entertainment & Recreation</option>
              <option value="Childcare">Childcare</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          )}
          <input
            required="required"
            type="text"
            className="form-control mt-3"
            id="cost"
            placeholder="Cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-3 w-50">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItem;
