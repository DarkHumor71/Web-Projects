//time in Seconds
function App() {
  const [breaktime, setBreaktime] = React.useState(5);
  const [sessiontime, setSessiontime] = React.useState(25);
  const [time, setTime] = React.useState(1); //timer
  const [current, setCurrent] = React.useState("Session"); //label
  const [run, setRun] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState(null);
  var stpcounter = 0;
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${
      seconds < 10 ? "0" + seconds.toString() : seconds
    }`;
  };

  const timing = (x) => {
    switch (x) {
      case "bd":
        if (breaktime > 1) {
          setBreaktime((prev) => Number(prev) - 1);
          if (current === "Break") {
            setTime((prevTime) => Number(prevTime) - 60);
          }
        }
        break;
      case "bu":
        if (breaktime < 60) {
          setBreaktime((prev) => Number(prev) + 1);
          if (current === "Break") {
            setTime((prevTime) => Number(prevTime) + 60);
          }
        }
        break;
      case "su":
        if (sessiontime < 60) {
          setSessiontime((prev) => Number(prev) + 1);
          if (current === "Session") {
            setTime((prevTime) => Number(prevTime) + 60);
          }
        }
        break;
      case "sd":
        if (sessiontime > 1) {
          setSessiontime((prev) => Number(prev) - 1);
          if (current === "Session") {
            setTime((prevTime) => Number(prevTime) - 60);
          }
        }
        break;
    }
  };

  const startstopTimer = () => {
    if (!run) {
      let x = false;
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else if (prevTime == 0 && !x) {
            x = true;
            console.log("w");
            return prevTime;
          }
          if (x) {
            beep();
            flip();
            return 0;
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    } else {
      clearInterval(intervalId); // Clear the correct intervalId
      setIntervalId(null);
    }
    setRun(!run);
  };

  const beep = () => {
    document.getElementById("beep").play();
  };
  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSessiontime(25);
    setBreaktime(5);
    setCurrent("Session");
    setTime(25 * 60);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };
  const flip = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === "Session" ? "Break" : "Session"
    );

    if (current === "Session") {
      setTime(breaktime * 60);
    } else {
      setTime(sessiontime * 60);
    }
  };

  return (
    <div class="container">
      <div class="grid">
        <div>
          <div id="break-label">Break Length</div>
          <div
            id="break-decrement"
            onClick={() => timing("bd")}
            class="down click padButton btn-level "
          >
            <i class="fa fa-arrow-down fa-2x"></i>
          </div>
          <div id="break-length" class="num padButton btn-level">
            {breaktime}
          </div>
          <div
            id="break-increment"
            onClick={() => timing("bu")}
            class="up click padButton btn-level"
          >
            <i class="fa fa-arrow-up fa-2x"></i>
          </div>
        </div>

        <div>
          <div id="session-label">Session Length</div>
          <div
            id="session-decrement"
            onClick={() => timing("sd")}
            class="down click padButton btn-level"
          >
            <i class="fa fa-arrow-down fa-2x"></i>
          </div>
          <div id="session-length" class="num padButton btn-level">
            {sessiontime}
          </div>
          <div
            id="session-increment"
            onClick={() => timing("su")}
            class="up click padButton btn-level"
          >
            <i class="fa fa-arrow-up fa-2x"></i>
          </div>
        </div>
        <div>
          <div id="timer-label">{current}</div>
          <div id="time-left" class="rem">
            {formatTime(time)}
          </div>
          <button id="start_stop" onClick={startstopTimer}>
            <i class="fa fa-play fa-2x"></i>
            <i class="fa fa-pause fa-2x"></i>
          </button>
          <button id="reset" onClick={resetTimer}>
            <i class="fa fa-refresh fa-2x"></i>
          </button>
        </div>
      </div>
      <audio
        id="beep"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
