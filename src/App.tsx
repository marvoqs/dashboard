import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AddItemButton from "./components/buttons/AddItemButton";
import CustomDragLayer from "./components/CustomDragLayer";
import Dashboard from "./components/Dashboard";

import useItems from "./hooks/useItems";

function App() {
  const { addItem, deleteItem, getItems, setItems } = useItems();

  return (
    <>
      <AddItemButton addItem={addItem} />
      <DndProvider backend={HTML5Backend}>
        <Dashboard
          deleteItem={deleteItem}
          getItems={getItems}
          setItems={setItems}
        />
        <CustomDragLayer />
      </DndProvider>
    </>
  );
}

export default App;
