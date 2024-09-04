import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

// Props: INPUT PASSED TO A COMPONENT, Immutable: READ ONLY
// State: DATA MANAGED BY A COMPONENT, Mutable: THIS COMP HAS DATA THAT CHANGES
// Anytime they change, react re-renders component and updates dom


function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)} />
    </>
  );
}

export default App;   