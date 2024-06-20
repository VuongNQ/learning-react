import FormMani from "./formMain";
import Synchrozition from "./synchronization";
import Task from "./Task/Task";
function App() {
  return (
    <div className="container">
      <FormMani />
      <Task/>
      <Synchrozition/>
    </div>
  );
}

export default App;
