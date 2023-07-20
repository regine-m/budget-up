import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './custom.css';
import Budget from "./components/Budget";
import Net from "./components/Net";
import Expenses from "./components/Expenses";
import AllItemList from "./components/AllItemList";
import AddItem from "./components/AddItem";
import { AppProvider } from "./context/AppContext";
import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="custom-card p-3 mb-5">
              <h5 className="mt-3 text-white fs-4 fw-bold">EXPENSE/BUDGET</h5>
              <div className="row mt-3">
                <div className="col-sm">
                  <AddItem />
                  <AllItemList />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 mb-2">
                <Budget />
              </div>
              <div className="col-md-4 mb-2">
                <Expenses />
              </div>
              <div className="col-md-4 mb-2">
                <Net />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm ">
                <ExpenseChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
