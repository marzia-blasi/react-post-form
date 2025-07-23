import { useState } from "react";

function App() {
  const apiPost = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  // const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
        author: name,
        body: "",
        public: true,
        id: ""
  })

 /**
  function handleName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
 */
  
  function handleFromData(e) { 
    const fTitle = e.target.title;
    const fAuthor = e.target.author;
    const fbody = e.target.body;
    const fpubblic = e.target.pubblic
    const newData = formData;
    const newData[fieldName] = fieldValue;


    setFormData(newData);
  }

  //per inviare 
  function handleSubmit(e) {
    e.preventDefault();

    fetch(apiPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "",
        author: name,
        body: "",
        public: true,
        id: "",
      }),
    })
      .then((response) => {
        console.log(response.status);
      })

      .then((data) => {
        console.log(data);
        setName("");
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
            onChange={handleFromData}
          />
        </div>
        <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            aria-describedby="helpId"
            placeholder="nome autore"
            value={name}
            onChange={handleName}
          />
      </div>
      <div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Funzionerà?
        </button>
      </div>
    </>
  );
}

export default App;
