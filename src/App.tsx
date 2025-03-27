import { Heading } from "./components";
// import { Button } from "./components";

function App() {
  return (
    <>
      <Heading variant="h1" text="Component Library Demo" color="primary" />

      <div className="card">
        <Heading variant="h2" text="Heading Examples" color="success" />
        <Heading variant="h3" text="This is an h3 heading" color="warning" />
        <Heading variant="h4" text="This is an h4 heading" />
        <Heading variant="h5" text="This is an h5 heading" />
        <Heading variant="h6" text="This is an h6 heading" />
      </div>

      {/* <div className="card">
        <Heading variant="h2" text="Button Examples" color="success" />

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button size="small" variant="primary">
            Small
          </Button>
          <Button size="medium" variant="primary">
            Medium
          </Button>
          <Button size="large" variant="primary">
            Large
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default App;
