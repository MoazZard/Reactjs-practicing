import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

// Props: INPUT PASSED TO A COMPONENT, Immutable: READ ONLY
// State: DATA MANAGED BY A COMPONENT, Mutable: THIS COMP HAS DATA THAT CHANGES
// Anytime they change, react re-renders component and updates dom


function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => { // using props to pass functions into subcomponents
    console.log(item);
  }

  return (
    <>
      <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /></div>
      {/* List^ - prop passing */}

      <div>
        <Alert>
          <span>This is passed as ReactNode type</span>
        </Alert>
      </div> {/* ALERT - child passing */}

      <div><Button /></div> {/* Button base class */}
    </>
  );
}

export default App;   