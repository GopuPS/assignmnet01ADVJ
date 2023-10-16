// COMP1073 JavaScript Assignment 1

document.addEventListener("DOMContentLoaded", function () {
  /* Declarations */
  // Constants for main button elements
  const nounButton1 = document.getElementById("noun1");
  const verbButton = document.getElementById("verb");
  const adjButton = document.getElementById("adjective");
  const nounButton2 = document.getElementById("noun2");
  const settingButton = document.getElementById("setting");

  // Constants for displaying selected words
  const chosenNoun1Display = document.getElementById("chosenNoun1");
  const chosenVerbDisplay = document.getElementById("chosenVerb");
  const chosenAdjDisplay = document.getElementById("chosenAdjective");
  const chosenNoun2Display = document.getElementById("chosenNoun2");
  const chosenSettingDisplay = document.getElementById("chosenSetting");

  // Constants for final action buttons and displaying the story
  const showStoryButton = document.getElementById("playback");
  const randomStoryButton = document.getElementById("random");
  const storyDisplay = document.getElementById("story");

  // Arrays for word categories
  const nouns1 = [
    "The turkey",
    "Mom",
    "Dad",
    "The dog",
    "My teacher",
    "The elephant",
    "The cat",
  ];
  const verbs = [
    "sat on",
    "ate",
    "danced with",
    "saw",
    "didn't like",
    "kissed",
  ];
  const adjectives = [
    "a funny",
    "a scary",
    "a goofy",
    "a slimy",
    "a barking",
    "a fat",
  ];
  const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
  const settings = [
    "on the moon",
    "on the chair",
    "in my spaghetti",
    "in my soup",
    "on the grass",
    "in my shoes",
  ];

  // Variables for storing selected words for each category
  let selectedNoun1 = "";
  let selectedVerb = "";
  let selectedAdj = "";
  let selectedNoun2 = "";
  let selectedSetting = "";

  /* Functions */
  function pickRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
  }

  function handleNoun1Click() {
    selectedNoun1 = pickRandomWord(nouns1);
    chosenNoun1Display.textContent = selectedNoun1;
  }

  function handleVerbClick() {
    selectedVerb = pickRandomWord(verbs);
    chosenVerbDisplay.textContent = selectedVerb;
  }

  function handleAdjClick() {
    selectedAdj = pickRandomWord(adjectives);
    chosenAdjDisplay.textContent = selectedAdj;
  }

  function handleNoun2Click() {
    selectedNoun2 = pickRandomWord(nouns2);
    chosenNoun2Display.textContent = selectedNoun2;
  }

  function handleSettingClick() {
    selectedSetting = pickRandomWord(settings);
    chosenSettingDisplay.textContent = selectedSetting;
  }

  // Function to create and display the user's story
  function showStoryClick() {
    const userStory = `${selectedNoun1} ${selectedVerb} ${selectedAdj} ${selectedNoun2} ${selectedSetting}`;
    storyDisplay.textContent = userStory;
  }

  // Function to generate a random story
  function randomStoryClick() {
    const randomTale = `${pickRandomWord(nouns1)} ${pickRandomWord(
      verbs
    )} ${pickRandomWord(adjectives)} ${pickRandomWord(nouns2)} ${pickRandomWord(
      settings
    )}`;
    storyDisplay.textContent = randomTale;
  }

  /* Event Listeners */
  // Event listeners for each category button
  nounButton1.addEventListener("click", handleNoun1Click);
  verbButton.addEventListener("click", handleVerbClick);
  adjButton.addEventListener("click", handleAdjClick);
  nounButton2.addEventListener("click", handleNoun2Click);
  settingButton.addEventListener("click", handleSettingClick);

  // Event listener for the "Show Story" button
  showStoryButton.addEventListener("click", function () {
    const studentIdDisplay = document.getElementById("studentId");
    studentIdDisplay.textContent = "YourStudentIDHere";
    showStoryClick(); // Call the showStoryClick function to display the story
  });

  // Event listener for the "Random Story" button
  randomStoryButton.addEventListener("click", randomStoryClick);
});
