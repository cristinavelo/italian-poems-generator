function displayQuote(response) {
  console.log("Poem generated");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#user-instructions");
  let apiKey = "79fc46bb4abo220adbf7a3a2et15fe6f";
  let prompt = `User instructions: Generate an italian quote about ${instructionsElement.value}`;
  let context =
    "You are a inspirational life quote expert and like to write shorts quotes. Your mission is to generate a 2 line quote NOT in bold in basic HTML and separate each line with a <br />. Display only the quote. Make sure to follow the user instructions. Sign in a new line at the bottom of the quote with 'SheCodes AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">Generating an Italian quote about ${instructionsElement.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
