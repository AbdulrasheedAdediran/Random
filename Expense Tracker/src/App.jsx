import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 1500,
      date: new Date(2022, 0, 13),
    },
    {
      id: "e2",
      title: "Play Station 5",
      amount: 750,
      date: new Date(2022, 1, 20),
    },
    {
      id: "e3",
      title: "Savings and Investments",
      amount: 5000,
      date: new Date(2022, 2, 11),
    },
    {
      id: "e4",
      title: "Family Time Out",
      amount: 2500,
      date: new Date(2022, 3, 2),
    },
  ];
  return (
    <div className="App">
      <h1>Lets Gets Started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
