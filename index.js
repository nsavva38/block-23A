// https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-eb-web-ft/players
// players/player-id
// /teams

// grab the main and leave it as global
const main = document.querySelector(`main`);

// create an async/await function to fetch the response from the API
const getPuppies = async () => {

  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-eb-web-ft/players`)
  
  // convert the API response into a JSON array/object and return
  const responseJSON = await response.json();
  return responseJSON.data;
}

// render all puppies on the page via async/await function

const renderPuppies = async () => {

  const puppiesList = await getPuppies();
  console.log(puppiesList);

}

renderPuppies();