// https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-eb-web-ft/players
// imageUrl: ${puppy.imageUrl}
// players/player-id
// /teams

// grab the main and leave it as global
const main = document.querySelector(`main`);

// create an async/await function to fetch the response from the API
const getPuppies = async () => {

  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-eb-web-ft/players`)

  // convert the API response into a JSON array/object and return
  const responseJSON = await response.json();
  return responseJSON.data.players; // may have to remove players to have access to the players array
}





// render all puppies on the page via async/await function

const renderPuppies = async () => {

  // grab list from getPuppies
  const puppiesList = await getPuppies();
  
  // create the LI to be put on main page and store the puppyLI into the li tag
  const puppiesNamesLI = puppiesList.map((puppy) =>{
    return `<li>
                <h2>${puppy.name}</h2>
                <img src="${puppy.imageUrl}" alt="${puppy.name}" />
            </li>`
  })


  // create the OL to put on the HTML page
  const ol = document.createElement(`ol`);

  ol.innerHTML = puppiesNamesLI.join(``);
  
  main.replaceChildren(ol);

  // grab the LIs just placed on html
  const puppyLIs = document.querySelectorAll(`li`);

  // add eventListners to the LIs
  puppyLIs.forEach((puppy) => {
    puppy.addEventListener(`click`, (event) => {
      console.log(event);
      console.log(event.target.alt);
      console.log(event.target.innerText);
      console.log(``);

      if(event.target.alt) {
        renderPuppy(event.target.alt);
      }
      else if(event.target.innerText) {
        renderPuppy(event.target.innerText);
      }

    })
  })


}





const renderPuppy = async (puppy) => {
  // get the API of the puppy
  // const response = await fetch(`${puppy.imageUrl}`);
  // const puppyJSON = await response.json();

  console.log(`rendered puppy:`, puppy);
}


renderPuppies();