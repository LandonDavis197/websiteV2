// A dictionary of valid memory codes -> memory data
const memories: Record<string, { src: string; alt: string; text: string }> = {
  arches: {
    src: "images/arches.JPG",
    alt: "Arches National Park",
    text: "It was so dang cold, but we saw a beautiful Pinyon Jay",
  },
  firstHike: {
    src: "images/firstHike.JPG",
    alt: "Our First Hike",
    text: "We both pretended to be in better shape than we were",
  },
  windCave: {
    src: "images/windCave.JPG",
    alt: "Wind Cave Exploration",
    text: "Trail went from an easy 4 -> hard 7 real quick. Then a mud slide going down. Good times.",
  },
};

// Keywords to associate various names with memory keys
const memoryKeywords: Record<string, string[]> = {
  arches: ["arches", "arches national", "arches np", "arches park", "utah arches"],
  firstHike: ["first hike", "our first hike", "first trip", "beginning hike"],
  windCave: ["wind cave", "wind cave hike", "mud slide", "cave trail"],
};

// Function to normalize input (remove punctuation & trim spaces)
const normalizeInput = (input: string): string => {
  return input
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove punctuation
    .trim();
};

// Function to find the best match for a given input
const findMemoryKey = (input: string): string | null => {
  const normalizedInput = normalizeInput(input);

  for (const key in memoryKeywords) {
    if (memoryKeywords[key].some(alias => normalizedInput.includes(alias))) {
      return key;
    }
  }

  return null;
};

// Grab references to relevant DOM elements
const unlockButton = document.getElementById("unlock-button") as HTMLButtonElement;
const unlockScreen = document.getElementById("unlock-screen") as HTMLDivElement;
const memoryScreen = document.getElementById("memory-screen") as HTMLDivElement;
const memoryImage = document.getElementById("memory-image") as HTMLImageElement;
const memoryText = document.getElementById("memory-text") as HTMLParagraphElement;
const codeInput   = document.getElementById("unlock-code") as HTMLInputElement;
const backButton  = document.getElementById("back-button") as HTMLButtonElement;

// Unlock button logic
unlockButton.addEventListener("click", () => {
  const userCode = codeInput.value;
  console.log("Entered Code:", userCode);

  const memoryKey = findMemoryKey(userCode);

  if (memoryKey && memories[memoryKey]) {
    // Populate the memory screen with the chosen memory
    memoryImage.src = memories[memoryKey].src;
    memoryImage.alt = memories[memoryKey].alt;
    memoryText.textContent = memories[memoryKey].text;

    // Switch screens
    unlockScreen.classList.remove("active");
    memoryScreen.classList.add("active");
  } else {
    // If the code is invalid, alert the user
    alert("Sorry, that code isn't recognized. Please try again!");
  }
});

// Back button logic
backButton.addEventListener("click", () => {
  // Hide memory screen, show unlock screen
  memoryScreen.classList.remove("active");
  unlockScreen.classList.add("active");

  // Optionally clear the code input
  codeInput.value = "";
});
