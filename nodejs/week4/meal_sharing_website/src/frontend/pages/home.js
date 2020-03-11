window.handleHomeRequest = () => {
  fetch("/api/meals/")
    .then(response => response.json())
    .then(meals => {
      document.body.className = 'class-for-home'
      document.body.innerHTML = `<h1>Home</h1>
      <a href="meals" data-navigo>Meals</a>
      and
      <a href="meal/1" data-navigo>meal/1</a>
      <ul>
      ${meals.map(meal => {
        return `<li>${meal.title}</li>`
      }).join('')} 
      </ul>`
    })

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
