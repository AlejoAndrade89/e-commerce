import "./App.css";
import { Form } from "./Components/Form/Form";
import { Products } from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
          padding: "20px",
        }}
      >
        <Products />
        <Form />
      </div>
    </div>
  );
}

export default App;
