// https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players
// imageUrl: ${puppy.imageUrl}
// players/player-id
// /teams to access the teams rather than all the players

// grab the main and leave it as global


const renderMain = (puppiesTeams) => {

  const ol = document.createElement(`ol`);

  for (let i = 0; i < puppiesTeams.length; i++) {
    const h2 = document.createElement(`h2`);
    const li = document.createElement(`li`);
    const ul = document.createElement(`ul`);
    h2.innerText = `${puppiesTeams[i].name}`;
    li.appendChild(h2);
    ol.appendChild(li);
    main.appendChild(ol);
    for (let j = 0; j < puppiesTeams[i].players.length; j++) {
      const liPuppy = document.createElement(`li`);
      liPuppy.innerHTML = `<h3>${puppiesTeams[i].players[j].name}</h3>
                            <img src="${puppiesTeams[i].players[j].imageUrl}" 
                              alt="${puppiesTeams[i].players[j].name}" />`;
      ul.appendChild(liPuppy);
      ol.appendChild(ul);
      main.appendChild(ol);
    }
  }


}

// made global find puppy function 
const findPuppy = (toFind, array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].players.length; j++) {
      if(array[i].players[j].name === toFind) {
        return array[i].players[j];

      } 
    }
  }
}


const main = document.querySelector(`main`);

// create an async/await function to fetch the response from the API
const getPuppies = async () => {

  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams`)

  // convert the API response into a JSON array/object and return
  const responseJSON = await response.json();
  return responseJSON.data.teams;
}


// render all puppies on the page via async/await function

const renderPuppies = async () => {

  // grab list from getPuppies
  const puppiesTeams = await getPuppies();

  renderMain(puppiesTeams);


  // grab the LIs just placed on html
  const puppyLIs = document.querySelectorAll(`ul > li`);

  // add eventListners to the LIs
  puppyLIs.forEach((puppy) => {
    puppy.addEventListener(`click`, (event) => {
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
  // get the API of the puppies via the getPuppies
  // find the puppy via the name

  // grab list from getPuppies
  const puppiesList = await getPuppies();

  // find puppy
  const clickedPuppy = findPuppy(puppy, puppiesList);

  main.innerHTML = `
  <h2>Meet ${clickedPuppy.name}!</h2>
  <img src="${clickedPuppy.imageUrl}" alt="${clickedPuppy.name} picture" />
  <ul>
    <li>Breed: ${clickedPuppy.breed}</li>
    <li>Status: ${clickedPuppy.status}</li>
    <li>TeamID: ${clickedPuppy.teamId}</li>
  </ul>
  <br>
  <button>Back</button>
  `;

   // grab the button via querySelect
   const button = document.querySelector(`button`);

   // addEventListener to button so when clicked, it can render all the puppies via renderPuppies function
   button.addEventListener(`click`, () => {
    main.innerHTML = ``;
     renderPuppies();
   })


}


renderPuppies();