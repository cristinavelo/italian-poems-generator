function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#user-instructions");
  let apiKey = "79fc46bb4abo220adbf7a3a2et15fe6f";
  let prompt = `User instructions: Generate an italian poem about ${instructionsElement.value}`;
  let context =
    "You are a romantic poem expert and like to write shorts poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Display only the poem. Make sure to follow the user instructions. Sign at the bottom of the poem with 'SheCodes AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
