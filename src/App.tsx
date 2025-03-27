import "./App.css";
import { Heading } from "./components";

function App() {
  return (
    <>
      <Heading variant="h1" text="Heading Component Examples" color="primary" />

      <div className="card">
        <Heading variant="h2" text="This is an h2 heading" color="success" />
        <Heading variant="h3" text="This is an h3 heading" color="warning" />
        <Heading variant="h4" text="This is an h4 heading" />
        <Heading variant="h5" text="This is an h5 heading" />
        <Heading variant="h6" text="This is an h6 heading" />
      </div>
    </>
  );
}

export default App;
