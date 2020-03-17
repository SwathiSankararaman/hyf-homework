function searchMeal() {
  let input = document.getElementById('searchbar').value;
  console.log(input);
  fetch(`/api/meals/?title=${input}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
}

window.handleHomeRequest = () => {
  fetch("/api/meals/")
    .then(response => response.json())
    .then(meals => {
      document.body.innerHTML = `
      <div id='home-container'>
    <div class='menu-container'>
      <div class='menu'>
      <div class='logo'><a href = '/'><img src='logo.png'></div>
        <div class='meals'><a href="meals" data-navigo>Meals</a></div>
        <div class='meal'><a href="meal/1" data-navigo>meal/1</a></div>
        <div class='search'><input id="searchbar" onkeyup="searchMeal()" type="text"
        name="search" placeholder="Search meals.."> </div>
      </div>
    </div>
   
      <img src='meal.jpg' width='100%'>
      <ul>
      ${meals.map(meal => {
        return `<li>${meal.title}</li>`
      }).join('')} 
      </ul>
      <footer>
      <div class='footer'>
        <div class='copyrights'><p>© Swathi Sankararaman</p></div>
        <div class='contact'><p>Contact: swathi@mealsharing.com</p></div>
      </div>
      </footer>
      <ul>
      </div>
      `
    })

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
