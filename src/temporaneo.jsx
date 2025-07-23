function handleSubmit(e) {
  e.preventDefault();

  fetch(apiPost, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author: name }),
  })
    .then((response) => {
      console.log(response.status);
    })

    .then((data) => {
      console.log(data);
      setName("");
    });
}

<button onClick={handleSubmit} className="btn btn-primary">
  Funzionerà?
</button>;

function handleSubmit(e) {
  e.preventDefault();

  fetch(apiPost, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response.status);
    })

    .then((data) => {
      console.log(data);
      setFormData("");
    });
}

/**
  function handleName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  
  function handleFromData(e) { 
    const fTitle = e.target.title;
    const fAuthor = e.target.author;
    const fbody = e.target.body;
    const fpubblic = e.target.pubblic
    const newData = formData;
    const newData[fieldName] = fieldValue;

    setFormData(newData);
  }
*/
