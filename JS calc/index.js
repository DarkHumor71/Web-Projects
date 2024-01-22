function App() {
  const [expression, setExpression] = React.useState("");
  const [reset, setReset] = React.useState(false);
  const [ans, setAns] = React.useState("0");
  const isValidNumberFormat = (x) => {
    let y = x.split(/[+\/*-]/g);
    let bool = true;
    for (let i = 0; i < y.length; i++) {
      if (y[i] == "") continue;
      bool = /^(\d+\.?\d*)$/.test(y[i]);
      if (!bool) break;
    }
    return bool;
  };
  const zerotrim = (x) => {
    const trimmed = x.replace(/^0+/, "");
    if (trimmed === "") {
      setExpression("0");
    } else {
      setExpression(trimmed);
    }
  };

  const display = (sym) => {
    if (reset) {
      setExpression(sym);
      setReset(false);
    } else {
      let newExpression = expression + sym;

      if (newExpression.length >= 2 && newExpression.slice(-2) === "..") {
        // Do nothing for consecutive dots
      } else if (
        newExpression.length >= 2 &&
        !isValidNumberFormat(newExpression)
      ) {
        console.log("no");
        newExpression = expression;
        return;
      } else {
        zerotrim(newExpression);
      }

      setReset(false);
    }
  };

  const calc = () => {
    try {
      var filtered = expression.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("");
      var sum = eval(filtered);
      setAns(sum);
      setExpression(sum);
    } catch (e) {}
  };

  const clear = () => {
    setExpression("0");
    setAns("0");
    setReset(true);
  };
  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input id={"display"} type="text" disabled value={expression} />
          <div class="total">{ans}</div>
        </div>
        <div id={"clear"} onClick={clear} className="padButton AC">
          AC
        </div>
        <div id={"divide"} onClick={() => display("/")} className="padButton /">
          /
        </div>
        <div
          id={"multiply"}
          onClick={() => display("*")}
          className="padButton x"
        >
          x
        </div>
        <div
          id={"seven"}
          onClick={() => display("7")}
          className="padButton seven"
        >
          7
        </div>
        <div
          id={"eight"}
          onClick={() => display("8")}
          className="padButton eight"
        >
          8
        </div>
        <div
          id={"nine"}
          onClick={() => display("9")}
          className="padButton nine"
        >
          9
        </div>
        <div
          id={"subtract"}
          onClick={() => display("-")}
          className="padButton minus"
        >
          -
        </div>
        <div
          id={"four"}
          onClick={() => display("4")}
          className="padButton four"
        >
          4
        </div>
        <div
          id={"five"}
          onClick={() => display("5")}
          className="padButton five"
        >
          5
        </div>
        <div id={"six"} onClick={() => display("6")} className="padButton six">
          6
        </div>
        <div id={"add"} onClick={() => display("+")} className="padButton plus">
          +
        </div>
        <div id={"one"} onClick={() => display("1")} className="padButton one">
          1
        </div>
        <div id={"two"} onClick={() => display("2")} className="padButton two">
          2
        </div>
        <div
          id={"three"}
          onClick={() => display("3")}
          className="padButton three"
        >
          3
        </div>
        <div id={"equals"} onClick={calc} className="padButton equal">
          =
        </div>
        <div
          id={"zero"}
          onClick={() => display("0")}
          className="padButton zero"
        >
          0
        </div>
        <div
          id={"decimal"}
          onClick={() => display(".")}
          className="padButton dot"
        >
          .
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
