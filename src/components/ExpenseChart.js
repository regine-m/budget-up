import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, plugins } from "chart.js";
Chart.register(ArcElement, Tooltip, plugins);

const ExpenseChart = () => {
  const { items } = useContext(AppContext);
  const [expenseCategories, setExpenseCategories] = useState({});

  useEffect(() => {
    // Calculate the total cost for each expense category
    const categoryCosts = items.reduce((acc, item) => {
      if (!item.isBudget) {
        const category = item.name;
        acc[category] = (acc[category] || 0) + item.cost;
      }
      return acc;
    }, {});
    setExpenseCategories(categoryCosts);
  }, [items]);

  // Convert the expenseCategories object into an array of objects for the chart data
  const chartData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        borderWidth: 0.5,
        backgroundColor: [
          "#2e7d32",
          "#9e9d24",
          "#f9a825",
          "#ff8f00",
          "#d84315",
          "#424242",
          "#880e4f",
          "#0d47a1",
          "#006064",
        ],
        hoverBackgroundColor: [
          "#2e7d32",
          "#9e9d24",
          "#f9a825",
          "#ff8f00",
          "#d84315",
          "#424242",
          "#880e4f",
          "#0d47a1",
          "#006064",
        ],
      },
    ],
  };
  // Additional options for the chart
  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "right", //Display legends on the right side
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Expenses Chart",
        color: "#fff",
        font: {
          size: 18,
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      tooltip: {
        callbacks: {
          // Customize tooltip label to show label, value, and percentage
          label: (tooltipItem) => {
            const dataset = tooltipItem.dataset;
            const data = dataset.data;
            const total = data.reduce((acc, val) => acc + val, 0);
            const currentValue = data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `₱${currentValue} (${percentage}%)`;
          },
        },
      },
    },
    maintainAspectRatio: false, // Make the chart responsive
    responsive: true,
    aspectRatio: 1, // Set the aspect ratio for the chart (width / height)
  };
  // Check if there are no expense categories to display
  if (Object.keys(expenseCategories).length === 0) {
    return <div>No expense data to display</div>;
  }

  return (
    <div className="custom-card w-100 p-4 d-flex justify-content-center align-items-center">
      <div style={{ width: "400px", height: "400px" }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ExpenseChart;
