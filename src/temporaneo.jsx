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
