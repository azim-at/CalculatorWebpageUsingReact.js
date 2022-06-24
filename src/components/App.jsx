import React from "react";
import Addition from "./Addition";
import Substraction from "./Substraction";
import Multiplication from "./Multiplication";
import Division from "./Division";
import Clear from "./Clear";
import PreventRefresh from "./PreventRefresh";

function App() {
  return (
    <div>
      <h1 className="header">Calculator</h1>
      <div>
        <center>
          <form className="form-1" onSubmit={PreventRefresh}>
            <br />
            <div class="form__group field">
              <input
                type="number"
                class="form__field"
                placeholder="1st Digit"
                id="input-1"
                required
              />
            </div>
            <br />
            <div class="form__group field">
              <input
                type="number"
                class="form__field"
                placeholder="2nd Digit"
                id="input-2"
                required
              />
            </div>
            <br />
            <br />
            <input
              className="submit-2"
              type="submit"
              onClick={Addition}
              value="+"
            />
            <input
              className="submit-2"
              type="submit"
              onClick={Substraction}
              value="-"
            />
            <input
              className="submit-2"
              type="submit"
              onClick={Multiplication}
              value="*"
            />
            <input
              className="submit-2"
              type="submit"
              onClick={Division}
              value="/"
            />
            <br />
            <br />
            <input
              className="clear-btn"
              type="reset"
              onClick={Clear}
              value="Clear"
            />
          </form>
          <div className="answer-sec">
            <p>Answer:</p>
            <p id="answer"></p>
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
