import "./App.css";
import Card from "./components/Card";

function App(props) {
  // console.log("Propos -> ", props);
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl">Telwind Test</h1>
      <Card changeName="janeman" btnText="Visit me" /> <br />
      <Card userName="janeman" btnText="Click me" />
    </>
  );
}

export default App;
