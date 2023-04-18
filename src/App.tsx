import { Route,Routes } from "react-router-dom";
import TodoList from "./pages/Todo/TodoList";
import TodoAddHook  from "./pages/Todo/TodoAddHook";
import Unregister from "./pages/Todo/Unregister";
import Deletes from "./pages/ui/SetObj";
const App: React.FC<any> = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<TodoList/>} />
        <Route path="/add" element={<TodoAddHook/>}/>
        <Route path="/unregister" element={<Unregister/>}/>
        <Route path={`/del/:id`} element={<Deletes/>}/>

      </Routes>
    </div>
  );
};

export default App;