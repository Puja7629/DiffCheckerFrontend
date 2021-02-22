import { useLocation } from "react-router-dom";
const Output = () => {
  const location = useLocation();
  const diff = location.state.diff;

  function renderOutput(file) {
    const lines = file.split("~");
    const renderLines = lines.map((line, index) => {
      if (index === lines.length - 1) {
        return;
      }
      const diff = line.trim().split("\n");
      return RenderLine(diff, index);
    });
    return <div>{renderLines}</div>;
  }

  function RenderLine(diff, index) {
    return (
      <div
        style={{
          backgroundColor: "white",
          width: "calc(100vw - 200px",
          margin: "auto",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "center",
            minWidth: 100,
            userSelect: "none",
            paddingRight: 10
          }}
        >
          {index + 1}
        </div>
        {diff.map((item, index) => {
          return (
            <div
              style={{
                color:
                  item[0] === "-" ? "red" : item[0] === "+" ? "green" : "black",
              }}
            >{item}</div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#253257",
        color: "white",
        minHeight: "100vh",
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
        Output
      </header>
       {renderOutput(diff)}
    </div>
  );
};

export default Output;
