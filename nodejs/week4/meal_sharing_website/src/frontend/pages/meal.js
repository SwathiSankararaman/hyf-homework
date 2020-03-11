
window.handleMealRequest = params => {
  fetch(`/api/meals/${params.id}`)
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = `
  <h1>Meal with id ${data.title}</h1>`
    })
};
