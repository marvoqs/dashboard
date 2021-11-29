import AddItemButton from "./components/AddItemButton";
import Dashboard from "./components/Dashboard";
import useDashboard from "./hooks/useDashboard";

function App() {
  const { addItem, getItems, deleteItem } = useDashboard();

  return (
    <>
      <AddItemButton addItem={addItem} />
      <Dashboard deleteItem={deleteItem} getItems={getItems} />
    </>
  );
}

export default App;
