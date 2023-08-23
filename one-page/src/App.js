import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      {getHeaderDiv()}
    </div>
  );
}
function getHeaderDiv() {
  return (
    <div
      style={{
        width: "100vw",
        height: "60px",
        margin: "0 auto",
        backgroundColor: "#756472",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}> 标题 </h2>
    </div>
  );
}

export default App;
