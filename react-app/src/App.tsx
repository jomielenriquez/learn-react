// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Sto Tomas", "Tanauan", "Malvar", "Lipa"];

  // const handleSelectItem = (item: string) => console.log(item);
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <Alert>
  //     Hello <b>Test</b>
  //   </Alert>
  // );

  const [showAlert, setAlert] = useState(false);
  return (
    <>
      {showAlert && <Alert onClose={() => setAlert(false)}>Test</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
        Test
      </Button>
    </>
  );
}

export default App;
