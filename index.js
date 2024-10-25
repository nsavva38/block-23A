// https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players
// imageUrl: ${puppy.imageUrl}
// players/player-id
// /teams to access the teams rather than all the players

// grab the main and leave it as global

// made global find puppy function 
const findPuppy = (toFind, array) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i].name === toFind) {
      return array[i];
    }
  }
}



// const returnLIs = (array) => {
//   // console.log(`test`);
//   const arrayToFill = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(`i:`,i);
//     const tempArray = [];
//     for (let j = 0; j < array[i].players.length; j++) {
//       // console.log(`j:`,j);
//       // console.log(array[i].players[j]);
//       tempArray.push(`<li>${array[i].players[j].name}</li>`);
//     }
//     arrayToFill.push(tempArray);
//   }
//   return arrayToFill;
// }




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
  console.log(puppiesTeams);
  console.log(puppiesTeams[0].name);
  console.log(puppiesTeams[0].players[0].name); // players IS NOT a subset of name
  console.log(``);

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
      console.log(puppiesTeams[i].players[j].name);
      const liPuppy = document.createElement(`li`);
      liPuppy.innerText = `${puppiesTeams[i].players[j].name}`;
      ul.appendChild(liPuppy);
      ol.appendChild(ul);
      main.appendChild(ol);
    }
    console.log(``);
  }


//   // grab the LIs just placed on html
//   const puppyLIs = document.querySelectorAll(`li`);

//   // add eventListners to the LIs
//   puppyLIs.forEach((puppy) => {
//     puppy.addEventListener(`click`, (event) => {
//       if(event.target.alt) {
//         renderPuppy(event.target.alt);
//       }
//       else if(event.target.innerText) {
//         renderPuppy(event.target.innerText);
//       }

//     })
//   })


}





// const renderPuppy = async (puppy) => {
//   // get the API of the puppies via the getPuppies
//   // find the puppy via the name

//   // grab list from getPuppies
//   const puppiesList = await getPuppies();
//   // find puppy
//   const clickedPuppy = findPuppy(puppy, puppiesList);
//   console.log(clickedPuppy);

//   main.innerHTML = `
//   <h2>Meet ${clickedPuppy.name}!</h2>
//   <img src="${clickedPuppy.imageUrl}" alt="${clickedPuppy.name} picture" />
//   <ul>
//     <li>Breed: ${clickedPuppy.breed}</li>
//     <li>Status: ${clickedPuppy.status}</li>
//     <li>TeamID: ${clickedPuppy.teamId}</li>
//   </ul>
//   <br>
//   <button>Back</button>
//   `;

//    // grab the button via querySelect
//    const button = document.querySelector(`button`);

//    // addEventListener to button so when clicked, it can render all the puppies via renderPuppies function
//    button.addEventListener(`click`, () => {
//      renderPuppies();
//    })


// }


renderPuppies();