import { useState } from "react";

function App() {
  const apiPost = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  //const [name, setName] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
    public: true,
    id: "",
  });

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  //per inviare
  function handleSubmit(e) {
    e.preventDefault();
    const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            author deve essere un dato di tipo stringa
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            aria-describedby="helpId"
            placeholder="nome titolo"
            value={formData.title}
            onChange={handleFormData}
          />
        </div>
        <input
          type="text"
          className="form-control"
          name="author"
          id="author"
          aria-describedby="helpId"
          placeholder="nome autore"
          value={formData.author}
          onChange={handleFormData}
        />

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            body
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={2}
            defaultValue={""}
            value={formData.body}
            onChange={handleFormData}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label className="form-check-label" htmlFor="radioDefault1">
            pubblico
          </label>
        </div>

        <div>
          <button className="btn btn-primary">Funzionerà?</button>
        </div>
      </div>
    </>
  );
}

export default App;
