window.handleMealsRequest = () => {
  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      document.body.innerHTML = `
      <h1>Meals</h1>
      <ul>
      ${meals.map(meal => {
        return `<li>${meal.title} for ${meal.price}
        <a href='meals/${meal.id}'>View completely about ${meal.title} here</a>
        </li>`
      }).join('')} 
      </ul>`
    });
};
