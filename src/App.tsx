import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AddGroupButton from "./components/buttons/AddGroupButton";
import AddItemButton from "./components/buttons/AddItemButton";
import CustomDragLayer from "./components/CustomDragLayer";
import Dashboard from "./components/Dashboard";

import useGroups from "./hooks/useGroups";
import useItems from "./hooks/useItems";

function App() {
  const { addItem, deleteItem, getItems, setItems } = useItems();
  const { addGroup, getGroups } = useGroups();

  return (
    <>
      <AddItemButton addItem={addItem} />
      <AddGroupButton addGroup={addGroup} />
      <DndProvider backend={HTML5Backend}>
        <Dashboard
          deleteItem={deleteItem}
          getGroups={getGroups}
          getItems={getItems}
          setItems={setItems}
        />
        <CustomDragLayer />
      </DndProvider>
    </>
  );
}

export default App;
