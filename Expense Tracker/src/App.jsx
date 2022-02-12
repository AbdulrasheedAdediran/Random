import Expenses from "./Components/Expenses";
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
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
