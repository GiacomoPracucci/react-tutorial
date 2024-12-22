import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Aiutoooo</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Allerta!
      </Button>
    </div>
  );
}

export default App;
