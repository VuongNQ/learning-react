import { useState } from "react";
import "./App.css";
import FormSection from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormSection />
    </>
  );
}

export default App;
