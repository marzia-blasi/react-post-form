import { useState } from "react";

function App() {
  return (
    <>
      <div className="container">
        <div class="mb-3">
          <label for="" class="form-label">
            author deve essere un dato di tipo stringa
          </label>
          <input
            type="text"
            class="form-control"
            name="author"
            id="author"
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
