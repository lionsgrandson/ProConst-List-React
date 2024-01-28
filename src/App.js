import "./App.css";
import TableOfPros from "./components/tableOfProps";
import InputBox from "./components/inputBox";
function App() {
  return (
    <body>
      <h1 className="header">Pros & Cons</h1>
      <div className="innerDiv">
        <InputBox></InputBox>
      </div>
      <div className="OuterTables">
        <TableOfPros titleOfHeader={"Pros"}></TableOfPros>
        <TableOfPros titleOfHeader={"Cons"}></TableOfPros>
      </div>
    </body>
  );
}

export default App;
