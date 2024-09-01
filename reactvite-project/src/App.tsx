import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York','San Francisco','Tokyo','London','Paris'];

  return (
    <div><ListGroup items={items} heading="Cities"/></div>
  );
}

//APPLY BOOTSTRAP CLASS TO ITEMS

export default App;   