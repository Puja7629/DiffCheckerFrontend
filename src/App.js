import { useState } from "react";
import {useHistory} from 'react-router-dom';
const App = () => {

  const history = useHistory();

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");

  function callBackend() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file1: file1, file2: file2 }),
    };
    //Asynchronous programming
    fetch("http://localhost:9000", requestOptions).then(response=>
      response.json()
    ).then(data=>history.push("/output", {diff: data.join("\n").trim()}));
  }

  return (
    <div
      style={{
        backgroundColor: "#253257",
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "calc(10px + 3vmin)",
        }}
      >
        Diff Checker
      </header>
      <div
        style={{
          display: "flex",
          height: 50,
          width: "100vw",
          justifyContent: "space-around",
          paddingTop: 50,
        }}
      >
        <div>File A</div>
        <div>File B</div>
      </div>
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 200px)",
          width: "100vw",
        }}
      >
        <textarea
          style={{ flex: 1, fontSize: 20 }}
          onChange={(data) => setFile1(data.target.value)}
        ></textarea>
        <button onClick={callBackend}>Click me</button>
        <textarea
          style={{ flex: 1, fontSize: 20 }}
          onChange={(data) => setFile2(data.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default App;
